import React from 'react';
import { shallow, configure } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});