exports.getPosts = (req, res) => {
  // res.send('Hello getPosts!!');
  console.log('postController.js getPosts')

  res.json({
    posts: [
      {
        subject: 'Subject',
        content: 'Content.'
      }
    ]
  })

}