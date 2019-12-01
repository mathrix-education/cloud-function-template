import * as index from '../src/index';

const testBed: () => Promise<number> = index['your-function'];

describe('index', () => {
  it('should return 0', async () => {
    expect(await testBed()).toBe(0);
  });
});
