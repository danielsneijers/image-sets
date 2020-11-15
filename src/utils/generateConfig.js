const path = require('path');
const chalk = require('chalk');

function generateConfig(argv = {}) {
  if (!argv.input) {
    console.log(chalk.yellow(`\n⚠️  No input directory provided, using default:`) + chalk.white(' "./images"\n'));
  }

  if (argv.input && !argv.output) {
    console.log(chalk.yellow(`\n⚠️  No output directory provided, using same as input:`) + chalk.white(` ${argv.input}\n`));
  }

  const config = {
    inputDir: path.resolve(argv.input || './images'),
    outputDir: path.resolve(argv.output || argv.input || './images'),
  }
  
  return config
}

module.exports = generateConfig
