const fs = require('fs');

console.log("Start");
fs.readFile('text.txt','utf-8', function(err, data) {
  console.log(data);
});
console.log("End");