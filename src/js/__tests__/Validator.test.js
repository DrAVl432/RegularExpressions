import Validator from '../Validator';

test('valid username', () => {
  const validator = new Validator();
  expect(validator.validateUsername('testUser')).toBe(true);
});

test('invalid username with numbers at the start', () => {
  const validator = new Validator();
  expect(validator.validateUsername('123test')).toBe(false);
});

test('invalid username with more than three consecutive numbers', () => {
  const validator = new Validator();
  expect(validator.validateUsername('test1234User')).toBe(false);
});