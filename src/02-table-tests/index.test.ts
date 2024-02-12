import { simpleCalculator, Action } from '.';

const testCases = [
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 10, b: 5, action: Action.Add, expected: 15 },
  { a: 2, b: 0, action: Action.Add, expected: 2 },

  { a: 5, b: 2, action: Action.Subtract, expected: 3 },
  { a: 10, b: 10, action: Action.Subtract, expected: 0 },
  { a: 5, b: 10, action: Action.Subtract, expected: -5 },

  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: 3, b: 3, action: Action.Multiply, expected: 9 },
  { a: 3, b: 0, action: Action.Multiply, expected: 0 },

  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: 12, b: 4, action: Action.Divide, expected: 3 },
  { a: 4, b: 4, action: Action.Divide, expected: 1 },

  { a: 2, b: 4, action: Action.Exponentiate, expected: 16 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
  { a: 12, b: 2, action: Action.Exponentiate, expected: 144 },

  { a: 2, b: 2, action: null, expected: null },
  { a: 2, b: 2, action: 0, expected: null },
  { a: 2, b: 2, action: 'string', expected: null },

  { a: null, b: 2, action: Action.Add, expected: null },
  { a: 2, b: undefined, action: Action.Add, expected: null },
  { a: undefined, b: 'string', action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  testCases.forEach(({ a, b, action, expected }) => {
    test(`should ${action} ${a} and ${b} to equal ${expected}`, () => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    });
  });
});
