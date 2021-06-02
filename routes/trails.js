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


module.exports = router;
