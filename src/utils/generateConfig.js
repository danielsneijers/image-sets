const path = require('path');
const chalk = require('chalk');

function generateConfig(argv = {}) {
  if (!argv.input) {
    console.log(chalk.yellow(`\n⚠️  No input directory provided, using default:`) + chalk.white(' "./images"\n'));
  }

  const config = {
    inputDir: path.resolve(argv.input || './images'),
    outputDir: argv.output ? path.resolve(argv.output) : null,
  }
  
  return config
}

module.exports = generateConfig
