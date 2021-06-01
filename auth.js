const db = require('./db/models');
const {User} = db;


//loginUser
const loginUser = (req, res, user) => {
    req.session.auth = {userId: user.id};
}

//logoutUser
const logoutUser = (req, res) => {
    delete req.session.auth;
}

//restoreUser
const restoreUser = async(req, res, next) => {
    console.log(req.session)
    if(req.session.auth) {
        const {userId} = req.session.auth;
        try {
            const user = await User.findByPk(userId);
            if(user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch(err) {
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
}

//requireAuth
const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/login');
    }
    return next();
};



module.exports = {
    loginUser,
    logoutUser,
    restoreUser,
    requireAuth
}
