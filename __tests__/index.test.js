var Random = require('../index.js');

test('produce string with default length of 17', () => {
  expect(Random.string()).toHaveLength(17);
});
test('produce string with custom length of 8', () => {
  expect(Random.string({ length: 8 })).toHaveLength(8);
});
test('produce string with custom pool of only "abcdefghilmnopq" chars', () => {
  const pool = 'abcdefghilmnopq';
  const str = Random.string({ pool });
  const onlyABC = str.split('').filter(c => pool.includes(c)).length === str.length;
  expect(onlyABC).toBe(true);
});
test('produce number with default length of 8', () => {
  expect(Random.number().toString()).toHaveLength(8);
});
test('produce number with custom length of 4', () => {
  expect(Random.number({ length: 4 }).toString()).toHaveLength(4);
});
test('produce number with maximum custom length of 19', () => {
  expect(Random.number({ length: 22 }).toString()).toHaveLength(19);
});
test('produce secret with defualt length of 43', () => {
  expect(Random.secret()).toHaveLength(43);
});
test('produce secret with custom length of 23', () => {
  expect(Random.secret({ length: 23 })).toHaveLength(23);
});
test('produce number that will always contain only numbers', () => {
  const numbers = '0123456789';
  const value = Random.number().toString().split('');
  const onlyNumbers = value.filter(c => numbers.includes(c)).length === value.length;
  expect(onlyNumbers).toBe(true);
});
test('produce secret with custom pool of only "abcdefghilmnopq" chars', () => {
  const pool = 'abcdefghilmnopq';
  const str = Random.secret({ pool });
  const onlyABC = str.split('').filter(c => pool.includes(c)).length === str.length;
  expect(onlyABC).toBe(true);
});
/// SEED ///
test('produce repeatable numbers', () => {
  const seed = 'customSeed';
  const value = Random.createWithSeeds(seed).number();
  expect(Random.createWithSeeds(seed).number()).toBe(value);
});
test('produce repeatable numbers with custom length of 6', () => {
  const seed = 'customSeed';
  const value = Random.createWithSeeds(seed).number({ length: 6 });
  expect(Random.createWithSeeds(seed).number({ length: 6 }).toString()).toHaveLength(6);
  expect(Random.createWithSeeds(seed).number({ length: 6 })).toBe(value);
});
test('produce repeatable strings', () => {
  const seed = 'customSeed';
  const value = Random.createWithSeeds(seed).string();
  expect(Random.createWithSeeds(seed).string()).toBe(value);
});
test('produce repeatable strings with custom length of 11', () => {
  const seed = 'customSeed';
  const value = Random.createWithSeeds(seed).string({ length: 11 });
  expect(Random.createWithSeeds(seed).string({ length: 11 })).toBe(value);
});
test('produce repeatable secrets', () => {
  const seed = 'customSeed';
  const value = Random.createWithSeeds(seed).string();
  expect(Random.createWithSeeds(seed).string()).toBe(value);
});
test('produce repeatable secrets with custom length of 22', () => {
  const seed = 'customSeed';
  const value = Random.createWithSeeds(seed).string({ length: 22 });
  expect(Random.createWithSeeds(seed).string({ length: 22 })).toBe(value);
});