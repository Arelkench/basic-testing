import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from '.';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    expect(await resolveValue(5)).toBe(5);
    expect(await resolveValue('string')).toBe('string');
    expect(await resolveValue([1, 2, 3])).toStrictEqual([1, 2, 3]);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError('Custom message')).toThrow('Custom message');
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow('Oops');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
