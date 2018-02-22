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
          })
        )
      })
  });

});

