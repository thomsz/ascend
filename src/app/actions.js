import * as types from './constants';

export const setName = (name) => {
	return { type: types.SET_NAME, payload: name };
};
