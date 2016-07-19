import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WishlistItem from './WishlistItem';

const Wishlist = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' wishlist')} id="wishlist">

		<ul className="wishlist__list" id="wishlist-list">
			
			{props.wishlist && props.wishlist.map((product, i) => (
				<WishlistItem 
					key={i}	
					mix="catalog__item"
					product={product} 
				/>
			))}

		</ul>

		<div className="wishlist__total-price" id="wishlist-total-price">
			{props.totalPrice} руб.
		</div>

		<div className="wishlist__button-placeholder">

			<a href={props.ozonLink} className="wishlist__button button button--orange button--l" id="js-wishlist-buy" target="_blank">Купить на Озон.ру</a>

		</div>

	</div>
);



const mapStateToProps = (state, ownProps) => {
	const result = {
		wishlist: [],
		totalPrice: 0,
		ozonLink: 'http://www.OZON.ru/?context=cart&id=' + state.wishlist.join(',') +  '&partner=dnevnik_ru',
	};

	// const wishlistProducts = state.xml.products.filter( product => (
	// 	state.wishlist.list.indexOf(parseInt(product.id)) > -1
	// ));
	state.xml.products.forEach( (product) => {
		if (state.wishlist.indexOf(parseInt(product.id)) > -1){
			result.wishlist.push(product);
			result.totalPrice += parseInt(product.price);
		}
	});

	return result;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
