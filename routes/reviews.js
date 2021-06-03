const express = require('express');
const router = express.Router();
const { restoreUser } = require('../auth')
const { User, Collection, Trail } = require('../db/models')
const { asyncHandler } = require('../utils');

// POST /reviews/:trail_id
router.post('/:trail_id', asyncHandler( async (req, res) => {

    res.json()
}))

// POST /reviews/:trail


module.exports = router;
