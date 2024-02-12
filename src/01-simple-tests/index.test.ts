// Uncomment the code below and write your tests
import { simpleCalculator, Action } from '.';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 2, action: Action.Add })).toBe(4);
    expect(simpleCalculator({ a: 10, b: 5, action: Action.Add })).toBe(15);
    expect(simpleCalculator({ a: 2, b: 0, action: Action.Add })).toBe(2);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 2, action: Action.Subtract })).toBe(3);
    expect(simpleCalculator({ a: 10, b: 10, action: Action.Subtract })).toBe(0);
    expect(simpleCalculator({ a: 5, b: 10, action: Action.Subtract })).toBe(-5);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Multiply })).toBe(6);
    expect(simpleCalculator({ a: 3, b: 3, action: Action.Multiply })).toBe(9);
    expect(simpleCalculator({ a: 3, b: 0, action: Action.Multiply })).toBe(0);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 4, b: 2, action: Action.Divide })).toBe(2);
    expect(simpleCalculator({ a: 12, b: 4, action: Action.Divide })).toBe(3);
    expect(simpleCalculator({ a: 4, b: 4, action: Action.Divide })).toBe(1);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 4, action: Action.Exponentiate })).toBe(
      16,
    );
    expect(simpleCalculator({ a: 3, b: 3, action: Action.Exponentiate })).toBe(
      27,
    );
    expect(simpleCalculator({ a: 12, b: 2, action: Action.Exponentiate })).toBe(
      144,
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 2, b: 2, action: null })).toBeNull();
    expect(simpleCalculator({ a: 2, b: 2, action: 0 })).toBeNull();
    expect(simpleCalculator({ a: 2, b: 2, action: 'string' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: null, b: 2, action: Action.Add })).toBeNull();
    expect(
      simpleCalculator({ a: 2, b: undefined, action: Action.Add }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: undefined, b: 'string', action: Action.Add }),
    ).toBeNull();
  });
});
