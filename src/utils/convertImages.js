const path = require('path');
const sharp = require("sharp");

const sizes = {
  small: 640,
  medium: 1280,
  large: 2048,
}

const formats = ['jpg', 'webp']

function convertImages(images, outputDir = null) {
  let count = 0;
  console.log('Starting image conversion')
  
  images.forEach(image => {
    const transformer = sharp(image)
    
    Object.entries(sizes).forEach(([description,size]) => {
      const { ext } = path.parse(image);

      if (ext === 'png') {
        const fileName = newFileName(image, description, 'png', outputDir);
        transformer.clone().resize(size).toFormat('png').toFile(fileName)
        console.log(`Converting ${fileName}`)
        count++
      } else {
        formats.forEach(format => {
          const fileName = newFileName(image, description, format, outputDir);
          transformer.clone().resize(size).toFormat(format, { quality: 90 }).toFile(fileName)
          count++
          console.log(`Converting ${fileName}`)
        })
      }
    });
  });

  console.log(`\n${count} images converted\n`);
}

function newFileName(image, suffix, ext, outputDir) {
  const { dir, name } = path.parse(image);
  const newName = `${name}-${suffix}.${ext}`;
  
  if (outputDir) {
    return path.join(path.resolve(outputDir), newName);
  }

  return path.join(dir, newName);
}

module.exports = convertImages
