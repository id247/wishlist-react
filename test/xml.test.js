import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import * as actions from '../src/js/actions/xml';
import { products, categories } from '../src/js/reducers/xml';

describe('xml products', () => {

	it('should provide the initial state', () => {
		const stateBefore = undefined;
		const action = {};
		const stateAfter = [];
		
		//deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(products(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should handle FALSEXML_GET_PRODUCTS_START action', () => {
		const stateBefore = [];
		const action = { 
			type: actions.FALSEXML_GET_PRODUCTS_START,
		};
		const stateAfter = [];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(products(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should handle FALSEXML_GET_PRODUCTS_FAIL action', () => {
		const stateBefore = [];
		const action = { 
			type: actions.FALSEXML_GET_PRODUCTS_FAIL,
		};
		const stateAfter = [];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(products(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should handle FALSEXML_GET_PRODUCTS_SUCCESS action', () => {
		const stateBefore = [];
		const action = { 
			type: actions.FALSEXML_GET_PRODUCTS_SUCCESS,
			payload: [
				{id: 1, title: 'Товар', price: '156'}
			]
		};
		const stateAfter = [
			{id: 1, title: 'Товар', price: '156'}
		];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(products(stateBefore, action)).to.deep.equal(stateAfter);
	});


});

describe('xml categories', () => {

	it('should provide the initial state', () => {
		const stateBefore = undefined;
		const action = {};
		const stateAfter = [];
		
		//deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(categories(stateBefore, action)).to.deep.equal(stateAfter);
	});

	it('should handle FALSEXML_SET_CATEGORIES action', () => {
		const stateBefore = [];
		const action = { 
			type: actions.FALSEXML_SET_CATEGORIES,
			payload: [
				{id: 1, title: 'Заголовок'},
				{id: 2, title: 'Заголовок 2'},
			]
		};
		const stateAfter = [
			{id: 1, title: 'Заголовок'},
			{id: 2, title: 'Заголовок 2'},
		];
		
		deepFreeze(stateBefore);
		deepFreeze(stateAfter);

		expect(categories(stateBefore, action)).to.deep.equal(stateAfter);
	});


});

