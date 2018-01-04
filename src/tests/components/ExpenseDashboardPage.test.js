import React from 'react';
import { shallow } from 'enzyme';
import ExpanseDashboardPage from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashboardPage correctly to the screen', () => {
    const wrapper = shallow(<ExpanseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});