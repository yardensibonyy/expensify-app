import React from 'react';
import { shallow, configure } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let history, editExpense, removeExpense, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            history={history}
            removeExpense={removeExpense} 
            editExpense={editExpense}
            expense={expenses[2]}
        />
    );
});

test('should render edit expense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense correctly', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});