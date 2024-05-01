const connectDB = require('./db/connection')
const express = require('express')
const app = express()
const taskq = require('./routes/tasks')
require('dotenv').config()
app.use(express.json())

// app.get('/hello', (req,res)=>{
//     res.send('BIG BOOBS')
// })
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks' , taskq)

const start = async() =>{
try {
    await connectDB(process.env.mongo)
    app.listen(port , console.log(`server is listening on port ${port}..`));
} catch (err) {
    console.log(err);
}
}

const port = 3000
start()