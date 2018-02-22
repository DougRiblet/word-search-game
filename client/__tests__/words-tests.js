import fours from '../words/all-fours';
import sevens from '../words/select-sevens';

describe('Word Lists', () => {

  test('both word lists are arrays', () => {
    let foursIsArray = Array.isArray(fours);
    let sevensIsArray = Array.isArray(sevens);
    expect(foursIsArray).toBe(true);
    expect(sevensIsArray).toBe(true);
  });

  test('fours list contains 4214 words', () => {
    expect(fours.length).toBe(4214);
  });

  test('sevens list contains 1214 words', () => {
    expect(sevens.length).toBe(1214);
  });

  test('fours list contains only strings', () => {
    let foursOnlyStrings = fours.every(item => typeof item === 'string');
    expect(foursOnlyStrings).toBe(true);
  });

  test('sevens list contains only strings', () => {
    let sevensOnlyStrings = sevens.every(item => typeof item === 'string');
    expect(sevensOnlyStrings).toBe(true);
  });

  test('fours list contains only four-letter all-caps words', () => {
    let patt = /^[A-Z]{4}$/;
    let foursOnly4Caps = fours.every(item => patt.test(item));
    expect(foursOnly4Caps).toBe(true);
  });

  test('sevens list contains only seven-letter all-caps words', () => {
    let patt = /^[A-Z]{7}$/;
    let sevensOnly4Caps = sevens.every(item => patt.test(item));
    expect(sevensOnly4Caps).toBe(true);
  });

});
