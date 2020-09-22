import * as types from './constants';

export const setName = (name) => {
	return { type: types.SET_NAME, payload: name };
};

export const setMotherTongue = (value) => {
	return { type: types.SET_MOTHER_TONGUE, payload: value };
};

export const setLookingFor = (value) => {
	return { type: types.SET_LOOKING_FOR, payload: value };
};
