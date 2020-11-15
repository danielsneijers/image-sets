#!/usr/bin/env node
// const fs = require("fs");
// const sharp = require("sharp");
const chalk = require('chalk');
const yargs = require('yargs/yargs');
const generateConfig = require('./utils/generateConfig');
const gatherImages = require('./utils/gatherImages');
const convertImages = require('./utils/convertImages');

const {argv} = yargs(process.argv);

function run() {
  console.log(chalk.white.bold('\nGenerating image set'));
  
  const { inputDir, outputDir } = generateConfig(argv);
  const images = gatherImages(inputDir);
  
  convertImages(images, outputDir);
}

run()

module.exports = { generateConfig }
