const express = require('express');
const router = express.Router();
const { restoreUser } = require('../auth')
const { User, Collection, Trail , Review} = require('../db/models')
const { asyncHandler } = require('../utils');

// POST /reviews/:trail_id
router.post('/:trail_id', asyncHandler( async (req, res) => {
    const { textToSend , userId, trailId} = req.body;
    const review = Review.build({
        review: textToSend,
        user_id: userId,
        trail_id: trailId
    })


    res.json(await review.save())
}))



module.exports = router;
