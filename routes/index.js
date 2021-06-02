//external Packages
var express = require('express');
var router = express.Router();
//internal packages
const { State , Trail} = require('../db/models')
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

// GET trails in a given state_code
router.get('/states/:state_code', asyncHandler(async (req, res) => {

}))

module.exports = router;
