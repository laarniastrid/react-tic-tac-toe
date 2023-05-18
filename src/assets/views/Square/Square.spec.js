import React from 'react';
import { shallow } from 'enzyme';

import Square from './Square';

describe('Square', () => {
    let handleClick;

    beforeEach(() => {
        handleClick = jest.fn();
    });

    it('renders the component', () => {
        const value = "X";
        const wrapper = shallow(
            <Square value={value} onSquareClick={handleClick} isWinner={false} />
        );

        expect(wrapper.exists()).toBeTruthy();
    });

    it('should have value of X', () => {
        const value = "X";
        const wrapper = shallow(
            <Square value={value} onSquareClick={handleClick} isWinner={false} />
        );

        expect(wrapper.text()).toEqual(value);
    });

    it('should have winner class when isWinner is true', () => {
        const value = "X";
        const wrapper = shallow(
            <Square value={value} onSquareClick={handleClick} isWinner={true} />
        );

        expect(wrapper.hasClass('winner')).toBeTruthy();
    });
});
