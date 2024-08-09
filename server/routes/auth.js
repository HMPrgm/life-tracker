const express = require('express')
const router = express.Router();
const User = require('../models/user')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// router.use(passport.initialize());
// router.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.send({
            status: 401,
            message: "You must be logged in"
        })
    }
    next();
}

const isRunning = (req, res, next) => {
    console.log(req.user)
    console.log("working!")
    next();
}

router.post('/register', async (req, res) => {
    if (req.user) {
        res.status(404);
        return;
    }
    try {
        // console.log(req.session)
        // console.log(req.user)
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
        })
        res.send(req.session.user);
        // console.log(req.session);
        // console.log(req.user);
    } catch (e) {
        res.send(e.message);
        // res.redirect('/');
    }
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log(req.body)
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.status(200).json({ message: 'Login successful' });
        });
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    // req.logout();
})


module.exports = router;

