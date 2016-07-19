import cookies from 'js-cookie';
const cookieName = 'ozon_wishlist';


export const WISHLIST_ADD_ITEM 	= 'WISHLIST_ADD_ITEM';
export const WISHLIST_ADD_ITEMS 	= 'WISHLIST_ADD_ITEMS';
export const WISHLIST_DELETE_ITEM 	= 'WISHLIST_DELETE_ITEM';

export function wishlistAddItems(wishlist) {
	return{
		type: WISHLIST_ADD_ITEMS,
		payload: wishlist
	}
};

export function wishlistAddItem(id) {
	return{
		type: WISHLIST_ADD_ITEM,
		payload: id
	}
};

export function wishlistDeleteItem(id) {
	return {
		type: WISHLIST_DELETE_ITEM,
		payload: id
	}
}

export function wishlistGetFromCookies() {

	function getCookies(){
		return cookies.get(cookieName);
	}

	function getWishlist(products){
		const cookiesWishlist = getCookies();

		if (!cookiesWishlist){
			return [];
		}
		
		const tempWishlist = cookiesWishlist.split(',').map(id => parseInt(id));

		//only ids wich are in store
		return products.filter( product => (tempWishlist.indexOf(parseInt(product.id)) > -1) )
						.map( product => parseInt(product.id));
	}

	return (dispatch, getState) => {
		const products = getState().xml.products;
		const wishlist = getWishlist(products);
		dispatch(wishlistAddItems(wishlist));
	}
}


export function wishlistSetCookies() {

	function setCookies(wishlist){
		if ( wishlist.length > 0){
			cookies.set(cookieName, wishlist.toString(), { expires: 100, path: ''});
		}else{
			cookies.set(cookieName, false, { expires: -1, path: ''});
		}			
	}

	return (dispatch, getState) => {
		const wishlist = getState().wishlist;
		setCookies(wishlist);
	}
}

export function wishlistAddProduct(product) {
	return (dispatch, getState) => {
		dispatch(wishlistAddItem(product.id));
		dispatch(wishlistSetCookies());
	}
}
export function wishlistDeleteProduct(product) {
	return (dispatch, getState) => {
		dispatch(wishlistDeleteItem(product.id));
		dispatch(wishlistSetCookies());
	}
}
