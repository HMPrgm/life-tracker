const express = require('express')
const router = express.Router();
const User = require('../models/user')
const passport = require('passport');

const isLoggedIn = (req,res,next) => {
    if (!req.isAuthenticated()) {
        return res.send({
            status:401,
            message: "You must be logged in"
        })
    }
    next();
}

router.post('/register', async (req,res)=> {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            res.json(user);
        })
    } catch (e) {
        res.status(400).json(e.message)
    }
})

router.post('/login', passport.authenticate('local'),async (req,res)=> {
    res.send(req.user.username)
})
router.get('/logout', (req, res) => {
    req.logout();
})
router.get('/checkAuth',async (req,res) => {
    res.send()
})



module.exports = router;

