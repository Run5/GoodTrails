const express = require('express');
const router = express.Router();
const { restoreUser, requireAuth } = require('../auth')
const { User, Review } = require('../db/models')
const { asyncHandler, csrfProtection } = require('../utils');



// Some review routes moved to trails.js

// DELETE /reviews/:reviewId
router.delete('/:id', restoreUser, requireAuth, asyncHandler(async (req, res) => {
    const id = req.params.id; //review id primary key
    const reviewToDelete = await Review.findByPk(id)
    if (reviewToDelete) await reviewToDelete.destroy();

    // get updated review list after delete
    const reviews = await Review.findAll({ where: { trail_id } })
    res.json(reviews)
}))

module.exports = router;

