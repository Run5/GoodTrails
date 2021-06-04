/***********************External Packages***********************/
var express = require("express");
var router = express.Router();
//const { check, validationResult } = require("express-validator");
//const bcrypt = require("bcryptjs");


/***********************Internal Packages***********************/
const { csrfProtection, asyncHandler } = require("../utils");
const { Trail, State, User, Collection, Review } = require("../db/models");
const { requireAuth } = require("../auth");


// GET route for displaying a single trail
// GET /trails/:id
router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
  const trailId = parseInt(req.params.id, 10);
  const trail = await Trail.findByPk(trailId, {
    include:
      [
        { model: Review, include: { model: User } }
      ]
  });
  const loggedInUser = await User.findByPk(req.session.auth.userId);
  const state = await State.findByPk(trail.state_id);

  req.session.save(() => {
    res.render("trail", {
      trail,
      state,
      title: "Trail",
      loggedInUser: loggedInUser.toJSON()
    })
  });//end render
}));//end GET route for a single trail

// api GET /trails/toggles/:id
router.get("/toggles/:id(\\d+)", requireAuth, asyncHandler(async (req, res) => {
    const trailId = parseInt(req.params.id, 10);
    const userId = res.locals.user.id;
    const trailToggles = await Collection.findAll({
      where: {
        user_id: userId,
        trail_id: trailId,
      },
    });
    res.json({
      trailToggles
    })
  })
);//endGetRoute

// api PUT /trails/toggles/:id
router.put('/toggles/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const userId = res.locals.user.id;
  const trailId = parseInt(req.params.id, 10);
  const trailToggles = await Collection.findAll({
    where: {
      user_id: userId,
      trail_id: trailId,
    },
  });
  if(trailToggles[0]) {
    const {
      visited,
      want_to_visit,
    } = req.body;
    await trailToggles[0].update({ visited, want_to_visit });
  }//endIf
  else {
    const trailToggles = await Collection.build();
    const {
      visited,
      want_to_visit,
    } = req.body;
    await trailToggles.update({ user_id: userId, trail_id: trailId, visited, want_to_visit });
  }//endElse
  return res.send();
}));//endPutRoute

module.exports = router;
