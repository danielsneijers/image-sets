# Image-sets

Generates sets of images for web in different sizes and file formats

## Why this project?

I needed an easy way to just generate a set of sensible responsive images for any given web project. Image-sets recursively scans a folder for supported images and converts them a responsive set of images in 3 predefined sizes.

## Basic example

```bash
$ image-sets --input='./sourceFolder' --output='./outputFolder'
```

## Supported files

Currently this project is configured to convert from:

- `.png` -> `.png`
- `.jpg` -> `.jpg` and `.webp`
- `.webp` -> `.jpg` and `.webp`

## Supported sizes

Regardless of the input file or format, 3 sizes will be generated with aspect ratio preserved:

- small (640px wide)
- medium (1280px wide)
- large (2048px wide)

## Shout outs

Shoutout to [Takashi Miyazaki](https://unsplash.com/photos/64ajtpEzlYc), [Jeroen den Otter](https://unsplash.com/photos/uhjEIqGaqjo) and [Marc Wieland](https://unsplash.com/photos/K6a8laaDdsA) for uploading some beautiful images to [Unsplash](https://unsplash.com/).

This project is using the highly performant [sharp](https://github.com/lovell/sharp) image processor for NodeJS.

## License

MIT
