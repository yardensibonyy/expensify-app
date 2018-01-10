import React from 'react';
import { shallow, configure } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should correctly render LoadingPage', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});