const express = require('express');
const app = express();

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get("/event", (req,res)=>{
    res.json({
        start:Date.now(),
        end:Date.now() + 60*60*1000,
        name:"Work on Life Tracker",
        description:"work on Backend api with express and mongo"
    })
})

const PORT = 5000
app.listen(PORT,()=> {
    console.log(`Listening on port ${PORT}`)
})