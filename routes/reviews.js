const express = require('express');
const router = express.Router();
const { restoreUser } = require('../auth')
const { User, Review } = require('../db/models')
const { asyncHandler, csrfProtection } = require('../utils');



// Review routes moved to trails.js


module.exports = router;
