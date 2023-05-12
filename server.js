// DEPENDENCIES
require('dotenv').config()
require('./config/db.connection')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const blogRouter = require('./routes/blog-router')






// CONFIGURATION
const app = express()

const { PORT } = process.env


// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())
app.use(morgan("dev"))

// ROUTER MIDDLEWARE
app.use('/blogs', blogRouter)




// HOME ROUTE
app.get('/', (req,res)=>res.send('hello blog app'))


// SERVER INSTANCE
app.listen(PORT, ()=>console.log(`Listening on PORT: ${PORT}`))
