const express = require('express');
const router = express.Router();

const {User, Collection, Trail} = require('../db/models')
const {asyncHandler} = require('../utils');

/* GET THE COLLECTION OF TRAILS */
router.get('/all', asyncHandler(async (req, res) => {
    // const user = res.locals.user.id;
    // const { user_id, trail_id, visited, want_to_visit } = req.body;

    const collectionOfTrails = await Collection.findAll({
        include: Trail
    });
    console.log(collectionOfTrails)
    // req.session.save(() => {
        res.render('collections', {collectionOfTrails})
    // });
}));

// router.post('/all/:id', asyncHandler(async (req, res) => {

// }))


module.exports = router;
