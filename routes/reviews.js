const express = require('express');
const router = express.Router();
const { restoreUser } = require('../auth')
const { User, Review } = require('../db/models')
const { asyncHandler, csrfProtection } = require('../utils');

// POST /reviews/:trail_id
router.post('/:trail_id', restoreUser, csrfProtection, asyncHandler(async (req, res) => {
    const { textToSend, userId, trailId } = req.body;
    const review = Review.build({
        review: textToSend,
        user_id: userId,
        trail_id: trailId
    })
    res.json(await review.save())
})) //endPost

// GET /reviews/:trail_id
router.get('/:trail_id', restoreUser, csrfProtection, asyncHandler(async (req, res) => {
    const review = await Review.findAll({
        where: { trail_id: req.params.trail_id},
        include: User,
        order: [["updatedAt", "DESC"]]
    })
    console.log("this is review,", review);
    res.json({ review, csrfToken: req.csrfToken() })
})) //endGet



module.exports = router;
