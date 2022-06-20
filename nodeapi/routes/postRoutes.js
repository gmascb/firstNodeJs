// this file will be responsible to link the routes and controllers

// creating the router
const express = require('express')
const router = express.Router();

// importing the controller
const postController = require('../controllers/postController.js')


// linking the path with the controller
router.get('/', postController.getPosts)

// exporting router -> use this when you want to export the entire module
// module.exports = router;


// use this to export several objects/functions
exports.router = () => {
  return router;
}

exports.getPosts = (req, res, next) => {
  console.log('postRoutes.js getPosts')
  postController.getPosts(req, res);
}

// ==================================================================

// const getPosts = (req, res) => {
//   res.send('Hello getPosts');
// }

// module.exports = {
//   getPosts
// }

// exports.getPosts = (req, res) => {
//   res.send('Hello getPosts');
// }