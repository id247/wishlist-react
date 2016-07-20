import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../src/js/actions/menu';
import { menu, activeCategory } from '../src/js/reducers/menu';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


describe('menu', () => {

	it('should provide the initial state', () => {
		const stateBefore = undefined;
		const action = {};
		const stateAfter = 0;
		
		//deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(activeCategory(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should handle MENU_SET_CATEGORY action', () => {
		const stateBefore = 0;
		const action = { 
			type: actions.MENU_SET_CATEGORY,
			payload: 1
		};
		const stateAfter = 1;
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(activeCategory(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should return initial state if MENU_SET_CATEGORY payload is not an integer', () => {
		const stateBefore = 0;
		const action = { 
			type: actions.MENU_SET_CATEGORY,
			payload: 'word'
		};
		const stateAfter = 0;
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(activeCategory(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should dispatch MENU_SET_CATEGORY action', () => {

		const initialState = {
			xml: {
				categories: [
					{ id: 1, title: 'title' },
					{ id: 2, title: 'title2' },
					{ id: 3, title: 'title3' }
				]
			},
			menu: {
				activeCategory: 0
			}
		}; // initial state of the store

		const store = mockStore(initialState);
		
		const expectedActions = [
			{ 
				type: actions.MENU_SET_CATEGORY,
				payload: 1
			}
		];		

		const storeActions = store.getActions();
		
		store.dispatch(actions.menuSetCategory(1));

		expect(storeActions).to.deep.equal(expectedActions);
	});

	it('should not dispatch any actions if i try to MENU_SET_CATEGORY witch is not exists', () => {

		const initialState = {
			xml: {
				categories: [
					{ id: 1, title: 'title' },
					{ id: 2, title: 'title2' },
					{ id: 3, title: 'title3' }
				]
			},
			menu: {
				activeCategory: 0
			}
		}; // initial state of the store

		const store = mockStore(initialState);
		
		const expectedActions = [];		

		const storeActions = store.getActions();

		store.dispatch(actions.menuSetCategory(4));

		expect(storeActions).to.deep.equal(expectedActions);
	});


});

