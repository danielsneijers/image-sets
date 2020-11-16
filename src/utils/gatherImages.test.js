const gatherImages = require('./gatherImages');

describe('utils / gatherImages', () => {
  beforeAll(() => {
    console.log = jest.fn();
  })

  beforeEach(() => {
    console.log.mockClear();
  })

  afterAll(() => {
    console.log.mockRestore();
  })

  test('gathers 3 images from the example folder', () => {
    gatherImages('./example')
    expect(console.log).toBeCalledWith(expect.stringContaining('3 images found'));
  })
});
