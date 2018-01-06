import selectorFilter from './expenses';

export default (expenses) => {
    const filtersExpenses = expenses.map(expense => expense.amount);
    return filtersExpenses.reduce((acc, cur) => acc + cur, 0);
};