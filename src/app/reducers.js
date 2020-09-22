import * as types from './constants';
import initialState from './initialState';

const mainReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};

export default mainReducer;
