const express = require('express');
const router = express.Router();
const {restoreUser} = require('../auth')
const {User, Collection, Trail} = require('../db/models')
const {asyncHandler} = require('../utils');

/* GET THE COLLECTION OF TRAILS */
router.get('/all/:id(\\d+)', restoreUser, asyncHandler(async (req, res) => {
    const trailId = parseInt(req.params.id, 10);
    const specificTrail = await Trail.findOne({
        where: {
            id: trailId
        }
    });
    const collectionOfTrails = await Collection.findAll();
    res.render('collections', {collectionOfTrails, specificTrail})
}));


module.exports = router;
