import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import * as actions from '../src/js/actions/loading';
import { loading } from '../src/js/reducers/loading';

describe('loading', () => {

	it('should provide the initial state', () => {
		const stateBefore = undefined;
		const action = {};
		const stateAfter = false;
		
		//deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(loading(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should handle LOADING_SHOW action', () => {
		const stateBefore = false;
		const action = { 
			type: actions.LOADING_SHOW
		};
		const stateAfter = true;
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(loading(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should handle LOADING_HIDE action', () => {
		const stateBefore = true;
		const action = { 
			type: actions.LOADING_HIDE
		};
		const stateAfter = false;
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(loading(stateBefore, action)).to.deep.equal(stateAfter);
	});


});

