import React from 'react';
import { shallow, configure } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render not found page correctly to the screen', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});