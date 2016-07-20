import * as menuActions from '../actions/menu';
import * as wishlistActions from '../actions/wishlist';

export const FALSEXML_GET_PRODUCTS_START = 'FALSEXML_GET_PRODUCTS_START';
export const FALSEXML_GET_PRODUCTS_SUCCESS = 'FALSEXML_GET_PRODUCTS_SUCCESS';
export const FALSEXML_GET_PRODUCTS_FAIL = 'FALSEXML_GET_PRODUCTS_FAIL';

export function getFalseXMLStart() {
	return {
		type: FALSEXML_GET_PRODUCTS_START,
		meta: {
			loading: true
		}
	}
}
export function getFalseXMLSuccess(products) {
	return {
		type: FALSEXML_GET_PRODUCTS_SUCCESS,
		payload: products,
		meta: {
			loading: false
		}
	}
}
export function getFalseXMLFail() {
	return {
		type: FALSEXML_GET_PRODUCTS_FAIL,
		meta: {
			loading: false
		}
	}
}

export const FALSEXML_SET_CATEGORIES = 'FALSEXML_SET_CATEGORIES';

export function setFalseXMLCategories(categories) {
	return {
		type: FALSEXML_SET_CATEGORIES,
		payload: categories,
	}
}

export function getFalseXML() {

	//pseudo promise =) for future imlementation real fetch
	function getFalseXML(){
		
		return new Promise( (resolve, reject) => {
			
			let products = [];
			let categories = [];

			[...document.querySelectorAll('.falsexml__item')].map( (item) => {	

				const tables = item.querySelectorAll('.OzonRev_tbMax');
				
				const categoryId = parseInt(item.getAttribute('data-category-id'));
				const categoryTitle = item.getAttribute('data-category-title');
				const categoryIcon = item.getAttribute('data-category-icon');

				categories.push({id: categoryId, title: categoryTitle, icon: categoryIcon});

				[...tables].forEach( table => {
					let href = table.querySelector('.OzonRev_detailName');

					if (!href) {
						return;
					}
					//update if item alredy exists
					const id = parseInt(href.href.match(/id\/(\d+)\//)[1]);
					const existingProduct = products.filter( product => (product.id == id) );
					
					if (existingProduct.length > 0){
						existingProduct[0].categories.push(categoryId);
						return;
					}

					const product = {
						id: id,
						categories: [categoryId],
						title: href.text,
						link: href.getAttribute('href'),
						image: table.querySelector('.OzonRev_tdPic img').getAttribute('data-src'),
						text: table.querySelector('.OzonRev_detailAnnot').innerHTML,
						price: table.querySelector('.OzonRev_priceValue > b').innerHTML,
						currency: table.querySelector('.OzonRev_priceCurrency').innerHTML,

					}
					products.push(product);				
				});

			});

			if (products.length === 0){
				reject('No products');
			}

			resolve({
				products,
				categories
			});

		});
	};

	return dispatch => {	
		dispatch(getFalseXMLStart());
				
		getFalseXML()
		.then( payload => {
			//console.log(products);
			dispatch(getFalseXMLSuccess(payload.products));
			dispatch(setFalseXMLCategories(payload.categories));

			dispatch(menuActions.menuSetCategory(payload.categories[0].id));
			
			dispatch(wishlistActions.wishlistGetFromCookies());
		})
		.catch( err => {
			console.log(err);
			dispatch(getFalseXMLFail());
		});
	}
};

