const fs = require('fs');
const axios = require('axios');

/** read file at path and print it out. */
function cat(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

/** read page at URL and print it out. */


// const url = "https://www.google.com/" 
async function webCat(url){
  try{
    res = await axios.get(url)
    console.log(res.data);
  } catch (err){
    console.error(`Error fetching ${url}; ${err}`);
    process.exit(1);
  }
} 

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}