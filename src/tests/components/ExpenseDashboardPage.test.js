import React from 'react';
import { shallow, configure } from 'enzyme';
import ExpanseDashboardPage from '../../components/ExpenseDashboardPage';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render ExpenseDashboardPage correctly to the screen', () => {
    const wrapper = shallow(<ExpanseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});