const sharp = require('sharp');
const convertImages = require('./convertImages');

const images = [
  '/Users/daniel.sneijers/Code/opensource/image-sets/example/takashi-miyazaki-64ajtpEzlYc-unsplash.jpg',
  '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/marc-wieland-K6a8laaDdsA-unsplash.jpg',
  '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/another folder/jeroen-den-otter-uhjEIqGaqjo-unsplash.jpg',
]

describe('utils / convertImages', () => {
  beforeAll(() => {
    console.log = jest.fn();
  })

  beforeEach(() => {
    console.log.mockClear();
    sharp.prototype.toFile.mockClear()
  })

  afterAll(() => {
    console.log.mockRestore();
  })

  it('converts all images to a set of images within a range', () => {
    const expected = [
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/takashi-miyazaki-64ajtpEzlYc-unsplash-small.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/takashi-miyazaki-64ajtpEzlYc-unsplash-small.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/takashi-miyazaki-64ajtpEzlYc-unsplash-medium.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/takashi-miyazaki-64ajtpEzlYc-unsplash-medium.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/takashi-miyazaki-64ajtpEzlYc-unsplash-large.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/takashi-miyazaki-64ajtpEzlYc-unsplash-large.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/marc-wieland-K6a8laaDdsA-unsplash-small.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/marc-wieland-K6a8laaDdsA-unsplash-small.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/marc-wieland-K6a8laaDdsA-unsplash-medium.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/marc-wieland-K6a8laaDdsA-unsplash-medium.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/marc-wieland-K6a8laaDdsA-unsplash-large.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/marc-wieland-K6a8laaDdsA-unsplash-large.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/another folder/jeroen-den-otter-uhjEIqGaqjo-unsplash-small.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/another folder/jeroen-den-otter-uhjEIqGaqjo-unsplash-small.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/another folder/jeroen-den-otter-uhjEIqGaqjo-unsplash-medium.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/another folder/jeroen-den-otter-uhjEIqGaqjo-unsplash-medium.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/another folder/jeroen-den-otter-uhjEIqGaqjo-unsplash-large.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/example/nested folder/another folder/jeroen-den-otter-uhjEIqGaqjo-unsplash-large.webp',
    ];
    convertImages(images);

    expected.forEach(image => {
      expect(sharp.prototype.toFile).toBeCalledWith(image);
    })
    expect(console.log).toBeCalledWith(`\n${expected.length} images converted\n`)
  })

  it('stores all images in 1 directory if outputdir is provided', () => {
    const expected = [
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/takashi-miyazaki-64ajtpEzlYc-unsplash-small.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/takashi-miyazaki-64ajtpEzlYc-unsplash-small.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/takashi-miyazaki-64ajtpEzlYc-unsplash-medium.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/takashi-miyazaki-64ajtpEzlYc-unsplash-medium.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/takashi-miyazaki-64ajtpEzlYc-unsplash-large.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/takashi-miyazaki-64ajtpEzlYc-unsplash-large.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/marc-wieland-K6a8laaDdsA-unsplash-small.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/marc-wieland-K6a8laaDdsA-unsplash-small.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/marc-wieland-K6a8laaDdsA-unsplash-medium.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/marc-wieland-K6a8laaDdsA-unsplash-medium.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/marc-wieland-K6a8laaDdsA-unsplash-large.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/marc-wieland-K6a8laaDdsA-unsplash-large.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/jeroen-den-otter-uhjEIqGaqjo-unsplash-small.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/jeroen-den-otter-uhjEIqGaqjo-unsplash-small.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/jeroen-den-otter-uhjEIqGaqjo-unsplash-medium.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/jeroen-den-otter-uhjEIqGaqjo-unsplash-medium.webp',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/jeroen-den-otter-uhjEIqGaqjo-unsplash-large.jpg',
      '/Users/daniel.sneijers/Code/opensource/image-sets/images/jeroen-den-otter-uhjEIqGaqjo-unsplash-large.webp',
    ];
    convertImages(images, './images');
    expected.forEach(image => {
      expect(sharp.prototype.toFile).toBeCalledWith(image);
    })
    expect(console.log).toBeCalledWith(`\n${expected.length} images converted\n`)
  })
});
