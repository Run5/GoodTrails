//external Packages
var express = require('express');
var router = express.Router();
//internal packages
const { State, Trail } = require('../db/models')
const { asyncHandler } = require('../utils')

/* GET home page not logged in. */
router.get('/', asyncHandler(async (req, res, next) => {
  const states = await State.findAll()
  res.render('landing', {
    title: 'Welcome to Good Trails',
    states
  });
}));

//********************************
// Misc API routes
//********************************


// GET trails in a given state_code
// do we need csrfProtection on this route?
// gy: this doesn't need to be an api route.
router.get('/states/:state_code', asyncHandler(async (req, res) => {

  let [trails] = await State.findAll({
    include: Trail,
    where: { state_code: req.params.state_code }
  })
  trails = trails.toJSON();
  console.log(trails);

  res.render('states', { trails})

}))

module.exports = router;
