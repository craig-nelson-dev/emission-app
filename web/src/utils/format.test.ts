import { formatKg } from './format';

test('formatKg returns kg correctly', () => {
  expect(formatKg(800)).toBe('800 kg');
});

test('formatKg returns t correctly', () => {
  expect(formatKg(1860)).toBe('1.86 t');
});
