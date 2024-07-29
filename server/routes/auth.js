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
  
})

router.post("/login", async (req,res) => {
  });
router.get('/logout', (req, res, next) => {
    
})


module.exports = router;

