import {
  getBankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const account = getBankAccount(10);

    expect(account.getBalance()).toBe(10);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(10);

    expect(() => account.withdraw(15)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const account = getBankAccount(10);
    const destinationAccount = getBankAccount(0);

    expect(() => account.transfer(15, destinationAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(10);

    expect(() => account.transfer(15, account)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const account = getBankAccount(10);

    expect(account.getBalance()).toBe(10);

    account.deposit(10);

    expect(account.getBalance()).toBe(20);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(10);

    expect(account.getBalance()).toBe(10);

    account.withdraw(5);

    expect(account.getBalance()).toBe(5);
  });

  test('should transfer money', () => {
    const account = getBankAccount(15);
    const destinationAccount = getBankAccount(0);

    expect(account.getBalance()).toBe(15);
    expect(destinationAccount.getBalance()).toBe(0);

    account.transfer(5, destinationAccount);

    expect(account.getBalance()).toBe(10);
    expect(destinationAccount.getBalance()).toBe(5);
  });

  test('fetchBalance should return number if request did not fail', async () => {
    const account = getBankAccount(0);

    jest.spyOn(account, 'fetchBalance').mockResolvedValue(10);

    const balance = await account.fetchBalance();

    expect(typeof balance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(10);
    const newBalance = 50;

    jest.spyOn(account, 'fetchBalance').mockResolvedValue(newBalance);

    await account.synchronizeBalance();

    expect(account.getBalance()).toBe(newBalance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(10);

    jest.spyOn(account, 'fetchBalance').mockResolvedValue(null);

    await expect(account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
