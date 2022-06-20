// How to run.
// $: node filesystemSynchronous.js
// || make fsS

const { showTime } = require ('./helper');
const fs = require('fs');


const fileName = 'readme.md';
const data = fs.readFileSync(fileName)

console.log(data.toString())
console.log('end');

// now the read command was Synchrounous