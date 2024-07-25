const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local')
const User = require('./models/user')
const session = require('express-session')

const app = express();

const cors = require('cors')
//Routes
const tasksRoute = require('./routes/tasks')
const authRoute = require('./routes/auth')

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/taskApp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(cors());
app.use(express.json());



const sessionExpiration = 1000*60*60*24*7; //1 Week
const sessionConfig = {
  secret: 'REPLACELATER', 
  resave:false,
  saveUninitialized:true,
  cookie: {
    httpOnly:true,
    expires: Date.now() + sessionExpiration,
    maxAge: sessionExpiration
  }
}
app.use(session(sessionConfig))


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use('/tasks', tasksRoute)
app.use('/auth', authRoute)



const PORT = 5000
app.listen(PORT,()=> {
    console.log(`Listening on port ${PORT}`)
})