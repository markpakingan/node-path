const fs = require('fs');

function cat(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

// Retrieve the path argument from the command line
const path = process.argv[2];

// Call the cat function with the specified path
cat(path);