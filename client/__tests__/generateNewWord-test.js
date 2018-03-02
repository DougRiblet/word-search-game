import generateNewWord from '../words/generateNewWord';

describe('Generate New Word', () => {

  test('returns object with correct properties', () => {
    return generateNewWord()
      .then(obj => {
        expect(obj).toEqual(
          expect.objectContaining({
            newSeven: expect.any(String),
            newPool: expect.any(Array),
            newLength: expect.any(Number),
            newSecs: expect.any(Number),
          })
        )
      })
  });

  test('returns new seven-letter all-caps word', () => {
    return generateNewWord()
      .then(obj => {
        expect(obj.newSeven).toMatch(/^[A-Z]{7}$/);
      })
  });

  test('calculates pool length correctly', () => {
    return generateNewWord()
      .then(obj => {
        expect(obj.newLength).toBe(obj.newPool.length);
      })
  });

});

