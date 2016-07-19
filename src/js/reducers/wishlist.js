// import { combineReducers } from 'redux';

import * as actions from '../actions/wishlist';

export function wishlist(state = [], action) {
	switch (action.type) {
		case actions.WISHLIST_ADD_ITEMS:
			return 	[...state, ...action.payload];
		case actions.WISHLIST_ADD_ITEM:
			return 	[...state, action.payload];
		case actions.WISHLIST_DELETE_ITEM:
			const index = state.indexOf(action.payload);
			return 	[
					...state.slice(0, index), 
					...state.slice(index + 1)
					]; 
		default:
			return state;
	}
}

// export const wishlist = combineReducers({
// 	list,
// 	totalPrice,
// 	//ozonLink,
// });
