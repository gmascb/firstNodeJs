// How to run.
// $: node filesystemAsynchronous.js
// || make fsA

// Edit the file with fileName name and see how it works.


const { showTime } = require ('./helper');

const fs = require('fs');
const fileName = 'readme.md';


console.log('Staring filesystem.js - '
 + 'showTime() will return undefined because the import wasnt finished yet -> '
 + showTime());

// will listen for each change that occurs in the file.
// it will never stop, until you stop it manually.
fs.watch(fileName, () => {
  console.log(`File changed! ${showTime()}`);
  readFile()
})

readFile()

function readFile(){
  fs.readFile(fileName, (err, data) => {

    if (err){
      console.log(err)
    } else{
      console.log(data.toString())
    }
  })
} 

console.log('end');

// at the end you see the message `end` coming first than the function readFile()
// it means the calls are Asynchronous.
// the readfile will take much longer than a simple console.log, that's the why.