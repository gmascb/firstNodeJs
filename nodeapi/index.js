const express = require('express')
const port = 3001

// middleware
const morgan = require('morgan')

// instantiate the express app
const app = express()

// importing the method from routes/post | you can use directly or as middleware
// const postRoutes = require('./routes/post')
const { getPosts } = require('./routes/postRoutes.js')

// using routes as middleware, the routes now send the responsability to the controller
const postRoutes = require('./routes/postRoutes')

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
  
  next(); // the next function needs to be called if it won't get stuck
}
// the middleware can be added with the method .use() or adding it to the endpoint
// app.use(myOwnMiddleware)

// creating endpoint with the method getPosts and adding the middleware into our endpoint
// console.log('getposts: ' + getPosts)
// app.get('/myOwnMiddleware', myOwnMiddleware, getPosts)
app.get('/myOwnMiddleware', myOwnMiddleware, getPosts)

// using with routes as middleware
app.use('/', postRoutes.getPosts)


// starting server
app.listen(port, () => { console.log(`Nodejs listening on port ${port}.`) })

