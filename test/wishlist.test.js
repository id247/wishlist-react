import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import * as actions from '../src/js/actions/wishlist';
import { wishlist } from '../src/js/reducers/wishlist';

describe('wishlist', () => {

	it('should provide the initial state', () => {
		const stateBefore = undefined;
		const action = {};
		const stateAfter = [];
		
		//deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should handle WISHLIST_ADD_ITEM action', () => {
		const stateBefore = [1,2,3];
		const action = { 
			type: actions.WISHLIST_ADD_ITEM,
			payload: 4
		};
		const stateAfter = [1,2,3,4];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should return initial state if WISHLIST_ADD_ITEM payload is not an integer', () => {
		const stateBefore = [1,2,3];
		const action = { 
			type: actions.WISHLIST_ADD_ITEM,
			payload: "word"
		};
		const stateAfter = [1,2,3];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should handle WISHLIST_DELETE_ITEM action', () => {
		const stateBefore = [1,2,3,4];
		const action = { 
			type: actions.WISHLIST_DELETE_ITEM,
			payload: 2
		};
		const stateAfter = [1,3,4];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});


	it('should retur initial state if i try to delete non existing item', () => {
		const stateBefore = [1,2,3,4];
		const action = { 
			type: actions.WISHLIST_DELETE_ITEM,
			payload: 7
		};
		const stateAfter = [1,2,3,4];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should return initial state if WISHLIST_DELETE_ITEM payload is not an integer', () => {
		const stateBefore = [1,2,3];
		const action = { 
			type: actions.WISHLIST_DELETE_ITEM,
			payload: "word"
		};
		const stateAfter = [1,2,3];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should handle WISHLIST_ADD_ITEMS action', () => {
		const stateBefore = [];
		const action = { 
			type: actions.WISHLIST_ADD_ITEMS,
			payload: [
				1566, 1567, 158
			]
		};
		const stateAfter = [
			1566, 1567, 158
		];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should return initial state if WISHLIST_ADD_ITEMS payload is not an array', () => {
		const stateBefore = [];
		const action = { 
			type: actions.WISHLIST_ADD_ITEMS,
			payload: "word"
		};
		const stateAfter = [];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should return initial state if WISHLIST_ADD_ITEMS payload is not an array of integers', () => {
		const stateBefore = [];
		const action = { 
			type: actions.WISHLIST_ADD_ITEMS,
			payload: ["word", "time"]
		};
		const stateAfter = [];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should add only integers to state WISHLIST_ADD_ITEMS', () => {
		const stateBefore = [];
		const action = { 
			type: actions.WISHLIST_ADD_ITEMS,
			payload: ["word", 1, 2, {}]
		};
		const stateAfter = [1, 2];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

});

