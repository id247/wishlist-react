// import { combineReducers } from 'redux';

import * as actions from '../actions/wishlist';

export function wishlist(state = [], action) {
	switch (action.type) {
		case actions.WISHLIST_ADD_ITEMS:
			if (!Array.isArray(action.payload)){
				return state;
			}
			const items = action.payload.filter( item => Number.isInteger(item) );
			return 	[...state, ...items];
		
		case actions.WISHLIST_ADD_ITEM:
			if (!Number.isInteger(action.payload)){
				return state;
			}
			return 	[...state, action.payload];
		
		case actions.WISHLIST_DELETE_ITEM:
			const index = state.indexOf(action.payload);
			if (index === -1){
				return state;
			}
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
