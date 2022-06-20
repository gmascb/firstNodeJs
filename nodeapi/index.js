const express = require('express')
const port = 3001

// instantiate the express app
const app = express()

// bring in routes
// const postRoutes = require('./routes/post')
const { getPosts } = require('./routes/post')

// creating endpoint with the method getPosts
app.get('/', getPosts)

// starting server
app.listen(port, () => { console.log(`Nodejs listening on port ${port}.`) })

