const sharp = require('sharp');

sharp.prototype.toFile = jest.fn()

module.exports = sharp
