var express = require('express');
var router = express.Router();
const {stateCodes} = require('../utils')

/* GET home page not logged in. */
router.get('/', function(req, res, next) {
  res.render('landing', {
    title: 'Welcome to Good Trails',
    states: stateCodes
  });
});

module.exports = router;
