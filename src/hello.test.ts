import { greeting } from './hello';

test('greeting is Hello, World', () => {
  expect(greeting()).toBe('Hello, World!');
});
