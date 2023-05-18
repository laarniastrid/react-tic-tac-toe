import React from 'react';
import { shallow } from 'enzyme';

import Game from './Game';
import Board from '../Board/Board';
import { NULL } from 'node-sass';

describe('Game', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await shallow(<Game />);
    });

    it('renders the component without errors', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a Board component with correct props', () => {
        const board = wrapper.find(Board);

        expect(board.exists()).toBe(true);
        expect(board.prop('xIsNext')).toBe(true);
        expect(board.prop('squares')).toEqual(
            [null, null, null, null, null, null, null, null, null]
        );
        expect(board.prop('onPlay')).toBeInstanceOf(Function);
        expect(board.prop('currentMove')).toBe(0);
    });
});
