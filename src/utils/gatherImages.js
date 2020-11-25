const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const supportedFileFormat = [
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.heif',
  '.heic',
  // no resizing of .svg files needed
];

const alreadyConvertedSuffixes = ['-small.', '-medium', '-large.'];

const prefixWith = (prefix) => (file) => `${prefix}/${file}`;
const isDirectory = (pathString) => fs.lstatSync(pathString).isDirectory();

function gatherImages(inputDir) {
  const allFiles = getFiles(inputDir);
  const images = allFiles
    .filter((file) => supportedFileFormat.includes(path.extname(file)))
    .filter((file) => !alreadyConvertedSuffixes.some((suffix) => file.includes(suffix)));

  console.log(`${images.length} images found in ${chalk.green(inputDir)}\n`);

  return images;
}

function getFiles(fromPath) {
  const prefixer = prefixWith(fromPath);
  const contents = fs.readdirSync(path.resolve(fromPath)).map(prefixer);
  const directories = contents.filter(isDirectory);

  if (directories.length) {
    const nestedContents = directories.map((dir) => getFiles(dir));
    return contents.concat(nestedContents).flat();
  }

  return contents;
}

module.exports = gatherImages;
