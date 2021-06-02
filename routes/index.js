var express = require('express');
var router = express.Router();
//internal packages
const { State } = require('../db/models')
const { asyncHandler } = require('../utils')

/* GET home page not logged in. */
router.get('/', asyncHandler(async (req, res, next) => {
  const states = await State.findAll()
  console.log(states[0]);
  res.render('landing', {
    title: 'Welcome to Good Trails',
    states
  });
}));

module.exports = router;
