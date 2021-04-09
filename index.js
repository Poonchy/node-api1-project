const dotenv = require("dotenv").config();
const server = require('./api/server');

const PORT = process.env.PORT || 4000

// START YOUR SERVER HERE
server.listen(PORT, ()=>{
    console.log(`Running on: ${PORT}`)
})