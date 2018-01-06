import ExpenseTotalSelector from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = ExpenseTotalSelector([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const result = ExpenseTotalSelector([expenses[0]]);
    expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const result = ExpenseTotalSelector(expenses);
    expect(result).toBe(240195);
});