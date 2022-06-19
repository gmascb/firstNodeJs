const fs = require('fs');
const fileName = 'readme.md';

console.log('Staring filesystem.js');

fs.watch(fileName, () => {
  console.log('File changed!');
})

// How to run.
// $: node filesystem.js