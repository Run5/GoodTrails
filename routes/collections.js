const express = require('express');
const router = express.Router();
const { restoreUser } = require('../auth')
const { User, State, Collection, Trail } = require('../db/models')
const { asyncHandler } = require('../utils');
const { Op } = require("sequelize");

router.get('/', restoreUser, asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.session.auth.userId);
    res.render('collections', { user })
}));

/* GET THE COLLECTION OF TRAILS */
router.get('/all', restoreUser, asyncHandler(async (req, res) => {
    const user_id = req.session.auth.userId;
    const collectionOfTrails = await Collection.findAll({
        include: {
            model: Trail,
            include: State
        },
        where: {
            user_id,
            [Op.or]: [{visited: true}, {want_to_visit: true}]
        }
    });
    res.json(collectionOfTrails);
}));


router.get('/visited', restoreUser, asyncHandler(async(req, res) => {
    const user_id = req.session.auth.userId;
    const collectionOfTrails = await Collection.findAll({
        include: {
            model: Trail,
            include: State
        },
        where: {
            user_id,
            visited: true
        }
    });
    //console.log(collectionOfTrails.toJSON())
    res.json(collectionOfTrails);
}));

router.get('/want_to_visit', restoreUser, asyncHandler(async(req, res) => {
    const user_id = req.session.auth.userId;
    const collectionOfTrails = await Collection.findAll({
        include: {
            model: Trail,
            include: State
        },
        where: {
            user_id,
            want_to_visit: true
        }
    })
    res.json(collectionOfTrails);
}))
module.exports = router;
