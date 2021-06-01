//external packages
var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { loginUser, logoutUser } = require("../auth");
//internal packages
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../db/models");
const { User } = db;

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//registration GET
router.get("/register", csrfProtection, (req, res, next) => {
  const user = User.build();

  res.render("register", {
    user,
    title: "Registration",
    csrfToken: req.csrfToken(),
  });//end render
});//end GET route for register

const userValidators = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Username")
    .isLength({ max: 20 })
    .withMessage("Username must not be more than 20 characters long"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address")
    .isLength({ max: 255 })
    .withMessage("Email Address must not be more than 255 characters long")
    .isEmail()
    .withMessage("Email Address is not a valid email")
    .custom((value) => {
      return db.User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The provided Email Address is already in use by another account"
          );
        }
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password")
    .isLength({ max: 50 })
    .withMessage("Password must not be more than 50 characters long"),
  // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
  // .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Confirm Password")
    .isLength({ max: 50 })
    .withMessage("Confirm Password must not be more than 50 characters long")
    .custom((value, { req }) => {
      if (value !== req.body.password)
        throw new Error("Confirm Password does not match Password");
      return true;
    }),
];

//registration POST
router.post(
  "/register",
  userValidators,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { email, username, password } = req.body;

    const user = User.build({
      email,
      username,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;

      await user.save();
      loginUser(req, res, user);
      res.redirect("/");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);

      res.render("register", {
        title: "Registration",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

//login ROUTE

router.get("/login", csrfProtection, (req, res) => {
  res.render("user-login", {
    title: "Login",
    csrfToken: req.csrfToken(),
  });
});

const loginValidators = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password"),
];

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    let errors = [];
    const validatorErrors = validationResult(req);
    if(validatorErrors.isEmpty()){
      const user = await User.findOne({
        where: {
          email
        }
      })
      if(user !== null){
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString())
        if(passwordMatch){
          loginUser(req, res, user)
          return res.redirect('/')
        }
      }
      errors.push('Login failed for provided email and password')
    }else{
      errors = validatorErrors.array().map((err)=> {err.msg})
    }
    res.render('user-login', {
      title: 'login',
      email,
      errors,
      csrfToken: req.csrfToken()
    })
  })
);// End Login POST route

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/login');
});// End Logout POST route

module.exports = router;
