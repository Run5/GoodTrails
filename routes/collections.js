const express = require('express');
const router = express.Router();
const {restoreUser} = require('../auth')
const {User, Collection, Trail} = require('../db/models')
const {asyncHandler} = require('../utils');

/* GET THE COLLECTION OF TRAILS */
router.get('/all', restoreUser, asyncHandler(async (req, res) => {
    const collectionOfTrails = await Collection.findAll({
        include: Trail
    });
        res.render('collections', {collectionOfTrails})
}));

// router.post('/all/:id', asyncHandler(async (req, res) => {

// }))


module.exports = router;
