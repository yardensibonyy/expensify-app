import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test ('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: '123abc'
    });
});

test ('should setup edit expense action object', () => {
    const action = editExpense('123abc', { amount:500, note:'ddd' });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '123abc',
        updates: {
             amount: 500,
             note: 'ddd'
        }
    });
});

test ('should setup add expense with provided values', () => {
    const expenseData = { 
        description: 'Shakshouka',
        amount: 690,
        createdAt: 123456789,
        note: 'tasty'
     };
     const action = addExpense(expenseData);
     expect(action).toEqual({
         type: "ADD_EXPENSE",
         expense: {
            ...expenseData,
            id: expect.any(String)
         }
     });
});

test ('should setup add expense with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});