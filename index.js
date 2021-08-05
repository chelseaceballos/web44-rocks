require('dotenv').config() //  this allows to 'inject' fake environment. variables

// const PORT = process.env.PORT || 5000
const { PORT } = require('./config')

const express = require('express');
const cors = require('cors');
const helmet =require('helmet');

const server = express()


server.use(express.json()) // teaches express to parse.req.body
server.use(cors())
server.use(helmet())

server.get('/', (req, res) => {
    res.send(`
    <h1>Web44 is pretty cool! </h1>
    `)
})

server.use('*', (req, res) => {
    res.json({
        message: "web44 is awesome indeed"
    })
});



server.listen(PORT, () => { //heroku machine uses different port
    console.log(`listening on ${PORT}`);
})