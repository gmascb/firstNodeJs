const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: "Hello World!"
  })
})

app.listen(3001);

// To run 
// make dev 


// The command 'npm run dev' will run the command in `package.json L:9`