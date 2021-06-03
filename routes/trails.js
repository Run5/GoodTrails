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
// GET /trails/:id
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


// POST /trails/:id/visited/:visitedBool (api)
router.post('/:id/visited/:visitedBool'), requireAuth, asyncHandler(async (req, res) => {
  const trail_id = parseInt(req.params.id, 10);
  const visited = req.params.visitedBool == 'true'; // purposely not using strict equality
  const user_id = res.locals.user.id;

  if (visited === true) {
    const collection = await Collection.create({ user_id, trail_id, visited })
    return res.send()
  } else {
    await Collection.destroy({
      where: { user_id, trail_id, visited }
    })
    return res.send()
  }


})

// POST /trails/:id/want_to_visit/:want_to_visitBool (api)
router.post('/:id/want_to_visit/:want_to_visitBool'), requireAuth, asyncHandler(async (req, res) => {
  const trail_id = parseInt(req.params.id, 10);
  const want_to_visit = req.params.want_to_visitBool == 'true'; // purposely not using strict equality
  const user_id = res.locals.user.id;
  
  if (want_to_visit === true) {
    const collection = await Collection.create({ user_id, trail_id, want_to_visit })
    return res.send()
  } else {
    await Collection.destroy({ where: { user_id, trail_id, want_to_visit } })
    return res.send()
  }
})


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

// api POST /trails/toggles/:id
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
