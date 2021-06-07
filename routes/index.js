//external Packages
const express = require('express');
const router = express.Router();
//internal packages
const { State, Trail } = require('../db/models')
const { asyncHandler } = require('../utils')

/* GET home page not logged in. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('user-login', {
    title: 'Welcome to Good Trails',
  });
}));

// GET home page trails
router.get("/trail/:id(\\d+)", asyncHandler(async (req, res) => {
  const trailId = parseInt(req.params.id, 10);
  const trail = await Trail.findByPk(trailId, {
    include: State
  });
  res.json( trail )
}));//endGetRoute

// GET /states/state_code
router.get('/states/:state_code', asyncHandler(async (req, res) => {
  let [trails] = await State.findAll({
    include: Trail,
    where: { state_code: req.params.state_code }
  })
  trails = trails.toJSON();
  res.render('states', { trails})
}))

module.exports = router;
