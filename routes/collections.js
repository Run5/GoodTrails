const express = require('express');
const router = express.Router();
const {restoreUser} = require('../auth')
const {User, Collection, Trail} = require('../db/models')
const {asyncHandler} = require('../utils');

router.get('/', restoreUser, (req, res) => {
    res.render('collections')
})

/* GET THE COLLECTION OF TRAILS */
router.get('/all', restoreUser, asyncHandler(async (req, res) => {
    const user_id = req.session.auth.userId;
    const collectionOfTrails = await Collection.findAll({
        include: Trail,
        where: {
            user_id
        }
    });
    res.json(collectionOfTrails)
}));


router.get('/visited', restoreUser, asyncHandler(async(req, res) => {
    const user_id = req.session.auth.userId;
    const collectionOfTrails = await Collection.findAll({
        include: Trail,
        where: {
            user_id,
            visited: true
        }
    });
    console.log(collectionOfTrails[0].toJSON())
    res.json(collectionOfTrails)
}));


module.exports = router;
