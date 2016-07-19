import { combineReducers } from 'redux';

import * as actions from '../actions/menu';

export function activeCategory(state = 0, action) {
	switch (action.type) {
		case actions.MENU_SET_CATEGORY:
			return action.payload;
		default:
			return state
	}
}
export const menu = combineReducers({
	activeCategory,
});
