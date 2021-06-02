/***********************External Packages***********************/
var express = require("express");
var router = express.Router();
//const { check, validationResult } = require("express-validator");
//const bcrypt = require("bcryptjs");


/***********************Internal Packages***********************/
const { csrfProtection, asyncHandler } = require("../utils");
const { Trail, State, Collection } = require("../db/models");
const { requireAuth } = require("../auth");


// GET route for displaying a single trail
router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
    const trailId = parseInt(req.params.id, 10);
    const trail = await Trail.findByPk(trailId);
    const state = await State.findByPk(trail.state_id);
    req.session.save(() => {
        res.render("trail", {
            trail,
            state,
            title: "Trail",
        })
    });//end render
}));//end GET route for a single trail



router.get(
  "/toggles/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
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
);

router.put('/toggles/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const trailId = parseInt(req.params.id, 10);

  const {
    visited,
    want_to_visit,
  } = req.body;

  const collection = Collection.build({
    trail_id: trailId,
    user_id: res.local.user.id,
    visited,
    want_to_visit
  });

  await collection.save();

}));//endPostRoute


module.exports = router;
