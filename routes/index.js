//external Packages
const express = require('express');
const router = express.Router();
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
