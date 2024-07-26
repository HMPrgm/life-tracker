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

const isRunning = (req,res,next) => {
    console.log(req.user)
    console.log("working!")
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
// register.post("/register", (req, res) => {
//   passport.authenticate("local-register", function (error, user, info) {
//     if (error) {
//       return res.status(500).json({
//         message: error || "Something happend",
//         error: error.message || "Server error",
//       });
//     }
//     req.logIn(user, function (error, data) {
//       if (error) {
//         return res.status(500).json({
//           message: error || "Something happend",
//           error: error.message || "Server error",
//         });
//       }
//       return res.json(user);
//     });
//   })(req, res);
// });

router.post("/login", function (req, res) {
    passport.authenticate("local-login", function (error, user, info) {
      if (error) {
        return res.status(500).json({
          message: error || "Something happend",
          error: error.message || "Server error",
        });
      }
  
      req.logIn(user, function (error, data) {
        if (error) {
          return res.status(500).json({
            message: error || "Something happend",
            error: error.message || "Server error",
          });
        }
      });
  
      user.isAuthenticated = true;
      return res.json(user);
    })(req, res);
  });
router.get('/logout', (req, res, next) => {
    console.log(req.session.passport)
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        console.log(req.session.user)
        res.send('successfully Logged out')
    });
})
router.get('/checkAuth',async (req,res) => {
  console.log("HELELELEP")
    res.send(req.session)
})



module.exports = router;

