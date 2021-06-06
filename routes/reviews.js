const express = require('express');
const router = express.Router();
const { restoreUser } = require('../auth')
const { User, Review } = require('../db/models')
const { asyncHandler, csrfProtection } = require('../utils');

// POST /trails/:trail_id/reviews/
router.post('/trails/:trail_id/reviews', restoreUser, csrfProtection, asyncHandler(async (req, res) => {
    const { textToSend, userId } = req.body;
    const trail_id = req.params.trail_id;
    const review = Review.build({
        review: textToSend,
        user_id: userId,
        trail_id: trail_id
    })
    await review.save()

    const updatedReviews = await Review.findAll({
        where: { trail_id },
        include: User,
        order: [["updatedAt", "DESC"]]
    })
    res.json({ updatedReviews })
})) //endPost

// GET /trails/:trail_id/reviews
router.get('trails/:trail_id/reviews', restoreUser, csrfProtection, asyncHandler(async (req, res) => {
    const review = await Review.findAll({
        where: { trail_id: req.params.trail_id },
        include: User,
        order: [["updatedAt", "DESC"]]
    })
    res.json({ review, csrfToken: req.csrfToken() })
})) //endGet

// DELETE /reviews/delete/:reviewId
router.delete('/trails/:trail_id/reviews/:id', restoreUser, asyncHandler(async (req, res) => {
    const id = req.params.id; //review id primary key
    const trail_id = req.params.trail_id;
    const user_id = req.session.auth.userId;
    const reviewToDelete = await Review.findOne({
        where: { user_id, id }
    });
    if (reviewToDelete) await reviewToDelete.destroy();

    // get updated review list after delete
    const reviews = await Review.findAll({ where: { trail_id } })
    res.json(reviews)
}))

module.exports = router;
