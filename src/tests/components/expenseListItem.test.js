import React from 'react';
import { shallow, configure } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render ExpenseListItem with fixture data', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});