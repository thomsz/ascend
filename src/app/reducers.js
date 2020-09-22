import * as types from './constants';
import initialState from './initialState';

const mainReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.SET_LOOKING_FOR:
			return {
				...state,
				preferences: { ...state.preferences, lookingFor: payload },
			};

		case types.SET_MOTHER_TONGUE:
			return {
				...state,
				preferences: { ...state.preferences, motherTongue: payload },
			};

		case types.SET_NAME:
			return {
				...state,
				preferences: { ...state.preferences, name: payload },
			};

		default:
			return state;
	}
};

export default mainReducer;
