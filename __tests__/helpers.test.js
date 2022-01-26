const { format_date, format_plural, format_url } = require('../utils/helpers');

test('format_date() returns a date string', () => {
  const date = new Date('2022-01-12 14:07:00');

  expect(format_date(date)).toBe('1/12/2022');
});

test('format_plural() returns a word with an "s" at the end if there are more than one of it', () => {

  expect(format_plural('lion', 1)).toBe('lion');
  expect(format_plural('tiger', 2)).toBe('tigers');
});
