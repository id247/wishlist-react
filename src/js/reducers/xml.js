import { combineReducers } from 'redux';

import * as actions from '../actions/xml';


export function products(state = [], action) {
	switch (action.type) {
		case actions.FALSEXML_GET_PRODUCTS_START:
		case actions.FALSEXML_GET_PRODUCTS_FAIL:
			return state;	
		case actions.FALSEXML_GET_PRODUCTS_SUCCESS:
			return [...state, ...action.payload];			
		default:
			return state;
	}
}
export function categories(state = [], action) {
	switch (action.type) {
		case actions.FALSEXML_SET_CATEGORIES:
			return [...state, ...action.payload];			
		default:
			return state;
	}
}

export const xml = combineReducers({
	products,
	categories,
});
