import React from 'react';
import { shallow, configure } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('shallow render header correctly', () => {
    const wrapper = shallow (<Header startLogout={() => {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();   
});

test('should call startLogout on click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow (<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
//expect(wrapper.find('h1').text()).toBe('Expensify');
//expect(wrapper.find('h1').length).toBe(1);

// const renderer = new ReactShallowRenderer();
// renderer.render(<Header />);
// expect(renderer.getRenderOutput()).toMatchSnapshot();