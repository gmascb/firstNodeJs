const express = require('express')
const port = 3001

// middleware
const morgan = require('morgan')

// instantiate the express app
const app = express()

// bring in routes
// const postRoutes = require('./routes/post')
const { getPosts } = require('./routes/post')

// morgan middleware
// it will log every request on the console
/*
[nodemon] starting `node index.js`
Nodejs listening on port 3001.
GET / 304 3.085 ms - -
*/
app.use(morgan('dev'))

// creating our own middleware
const myOwnMiddleware = (req, res, next) => {
  console.log('myOwnMiddleware applied.')
  
  // the next function needs to be called if it won't get stuck
  next();
}
// the middleware can be added with the method .use() or adding it to the endpoint
// app.use(myOwnMiddleware)

// creating endpoint with the method getPosts
// adding the middleware into our endpoint
app.get('/', myOwnMiddleware, getPosts)

// starting server
app.listen(port, () => { console.log(`Nodejs listening on port ${port}.`) })

