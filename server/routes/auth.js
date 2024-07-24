const express = require('express')
const router = express.Router();
const User = require('../models/user')

router.post('/register', async (req,res)=> {
    const {email, username, password} = req.body
    const user = new User({email, username})
    const newUser = await User.register(user, password)
    console.log(newUser)
    res.send(newUser)
})

module.exports = router;

