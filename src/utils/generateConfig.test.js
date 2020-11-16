const path = require('path');
const generateConfig = require('./generateConfig');

describe('utils / generateConfig', () => {
  beforeAll(() => {
    console.log = jest.fn();
  })

  beforeEach(() => {
    console.log.mockClear();
  })

  afterAll(() => {
    console.log.mockRestore();
  })

  describe('when no input provided', () => {
    test('warns the user of default settings', () => {
      generateConfig();
      expect(console.log).toBeCalledWith(expect.stringContaining(`No input directory provided`));
    });

    test('Uses default input and output settings', () => {
      const config = generateConfig();
      expect(config).toEqual({ 
        inputDir: path.resolve('./images'), 
        outputDir: null 
      });
    })
  })

  describe('when only inputDir provided', () => {
    test('provides no warnings', () => {
      const input = './example';
      generateConfig({ input });
      expect(console.log).not.toBeCalled();
    });
  })

  describe('when both inputDir and outputDir provided', () => {
    test('provides no warnings', () => {
      generateConfig({ 
        input: './example',
        output: './example'
      });
      expect(console.log).not.toBeCalled();
    });

    test('returns the input and output from args', () => {
      const result = generateConfig({ 
        input: './example',
        output: './example',
        yolo: 'swag'
      });
      expect(result).toEqual({ 
        inputDir: path.resolve('./example'),
        outputDir: path.resolve('./example')
      });
    });
  })
});
