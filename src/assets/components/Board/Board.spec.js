import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';

describe('Board', () => {
    it('should render the component', () => {
        const wrapper = shallow(<Board xIsNext={true} squares={Array(9).fill(null)} onPlay={jest.fn()} currentMove={0} />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should display the status correctly', () => {
        const wrapper = shallow(<Board xIsNext={true} squares={Array(9).fill(null)} onPlay={jest.fn()} currentMove={0} />);
        const status = wrapper.find('.status').text();
        expect(status).toBe('Next player: X');
    });

    it('should handle square click correctly', () => {
        const onPlayMock = jest.fn();
        const wrapper = shallow(<Board xIsNext={true} squares={Array(9).fill(null)} onPlay={onPlayMock} currentMove={0} />);
        wrapper.find('Square').at(0).props().onSquareClick();
        expect(onPlayMock).toHaveBeenCalled();
    });
});
