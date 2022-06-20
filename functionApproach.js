const fs = require('fs')
const fileName = 'readme.md'

const errHandler = err => console.log(err)
const dataHandler = data => console.log(data.toString())

fs.readFile(fileName, (err, data) => {
  if (err) errHandler(err)  
  dataHandler(data)
})

// creating functions
// How to run
// $: node functionApproach.js