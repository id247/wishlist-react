import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import * as actions from '../src/js/actions/menu';
import { menu, activeCategory } from '../src/js/reducers/menu';

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


});

