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
		const stateBefore = [
			{id: 1, title: 'title1'},
			{id: 2, title: 'title2'},
		];
		const action = { 
			type: actions.WISHLIST_ADD_ITEM,
			payload: {id: 3, title: 'title3'},
		};
		const stateAfter = [
			{id: 1, title: 'title1'},
			{id: 2, title: 'title2'},
			{id: 3, title: 'title3'},
		];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should return initial state if WISHLIST_ADD_ITEM payload is not an objecе', () => {
		const stateBefore = [
			{id: 1, title: 'title1'},
			{id: 2, title: 'title2'},
		];
		const action = { 
			type: actions.WISHLIST_ADD_ITEM,
			payload: 'something'
		};
		const stateAfter = [
			{id: 1, title: 'title1'},
			{id: 2, title: 'title2'},
		];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should handle WISHLIST_DELETE_ITEM action', () => {
		const stateBefore = [
			{id: 1, title: 'title1'},
			{id: 2, title: 'title2'},
			{id: 3, title: 'title3'},
		];
		const action = { 
			type: actions.WISHLIST_DELETE_ITEM,
			payload: 3
		};
		const stateAfter = [
			{id: 1, title: 'title1'},
			{id: 2, title: 'title2'},
		];
		
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
		const stateBefore = [
			{id: 1, title: 'title1'},
			{id: 2, title: 'title2'},
			{id: 3, title: 'title3'},
		];
		const action = { 
			type: actions.WISHLIST_DELETE_ITEM,
			payload: 'word'
		};
		const stateAfter = [
			{id: 1, title: 'title1'},
			{id: 2, title: 'title2'},
			{id: 3, title: 'title3'},
		];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should handle WISHLIST_ADD_ITEMS action', () => {
		const stateBefore = [];
		const action = { 
			type: actions.WISHLIST_ADD_ITEMS,
			payload: [
				{id: 1, title: 'title1'},
				{id: 2, title: 'title2'},
				{id: 3, title: 'title3'},
			]
		};
		const stateAfter = [
			{id: 1, title: 'title1'},
			{id: 2, title: 'title2'},
			{id: 3, title: 'title3'},
		];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should return initial state if WISHLIST_ADD_ITEMS payload is not an array', () => {
		const stateBefore = [];
		const action = { 
			type: actions.WISHLIST_ADD_ITEMS,
			payload: 'word'
		};
		const stateAfter = [];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should return initial state if WISHLIST_ADD_ITEMS payload is not an array of objects', () => {
		const stateBefore = [];
		const action = { 
			type: actions.WISHLIST_ADD_ITEMS,
			payload: ['word', 'time']
		};
		const stateAfter = [];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should add only correct objects to state WISHLIST_ADD_ITEMS', () => {
		const stateBefore = [];
		const action = { 
			type: actions.WISHLIST_ADD_ITEMS,
			payload: [
				'word', 
				1, 
				2, 
				{},			
				{id: 1, title: 'title1'},
				{id: 2, title: 'title2'},
				{id: 3, title: 'title3'},
			]
		};
		const stateAfter = [			
			{id: 1, title: 'title1'},
			{id: 2, title: 'title2'},
			{id: 3, title: 'title3'},
		];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(wishlist(stateBefore, action)).to.deep.equal(stateAfter);
	});

});

