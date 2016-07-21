import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Price from '../../components/Price';

import * as wishlistActions from '../../actions/wishlist';

const WishlistItem = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' wishlist-item')}>

		<div className="wishlist-item__image-placeholder">
			<img className="wishlist-item__image" src={props.product.image} alt={props.product.title} />
		</div>

		<div className="wishlist-item__content">

			<button 
				className="wishlist-item__delete js-wishlist-delete"
				onClick={props.removeFromWishlist}
			>
				&times;
			</button>

			<h3 className="wishlist-item__title">
				{props.product.title}
			</h3>

			<Price 
				mix="wishlist-item__price"
				price={props.product.price} 
				currency={props.product.currency} 
				shop="OZON.RU" 
				shopId="ozon" 
				shopUrl={props.product.link} 
			/>

		</div>

	</div>
);

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	removeFromWishlist: (e) => {
		e.preventDefault();
		dispatch(wishlistActions.wishlistDeleteProduct(ownProps.product));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistItem);
