import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 43556
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 5,
        description: 'some description',
        note: '',
        amount: 12345,
        createdAt: 5
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        {id: 5,
        description: 'some description',
        note: '',
        amount: 12345,
        createdAt: 5}
    ]); 
});

test('should edit an expanse', () => {
    const updates = {
        description: 'MacBook Pro',
        note: 'really good',
        amount: 54321
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(updates.description) &&
    expect(state[1].note).toBe(updates.note) &&
    expect(state[1].amount).toBe(updates.amount);
});

test('shpuld not edit expense if it not found', () => {
    const updates = {
        amount: 500
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: 12,
        updates: updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});