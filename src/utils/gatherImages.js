const path = require('path');
const fs = require('fs');

const supportedFileFormat = [
  '.jpg', 
  '.jpeg', 
  '.tif',
  '.tiff', 
  '.png', 
  '.svg', 
  '.gif',
  '.webp',
  '.heif', 
  '.heic',
];

const prefixWith = prefix => file => prefix + file;

function gatherImages(inputDir) {
  const prefixed = prefixWith(inputDir);
  const dirContents = fs.readdirSync(path.resolve(inputDir));
  const images = dirContents
    .filter(file => supportedFileFormat.includes(path.extname(file)))
    .map(prefixed);

  console.log(`${images.length} images found\n`);
  
  return images;
}



module.exports = gatherImages
