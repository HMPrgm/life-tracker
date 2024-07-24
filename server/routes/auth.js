const express = require('express')
const router = express.Router();
const User = require('../models/user')
const passport = require('passport');


router.post('/register', async (req,res)=> {
    const {email, username, password} = req.body
    const user = new User({email, username})
    const newUser = await User.register(user, password)
    console.log(newUser)
    res.send(newUser)
})

router.post('/login', passport.authenticate('local', {failureMessage:'Login Failed'}),async (req,res)=> {
    res.send({status:200,message:'success!'})
})
module.exports = router;

