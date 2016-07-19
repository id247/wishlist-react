import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as wishlistActions from '../../actions/wishlist';

const WishlistItem = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' wishlist-item')}>

		<div className="wishlist-item__image-placeholder">
			<img className="wishlist-item__image" src={props.product.image} alt={props.product.title} />
		</div>

		<div className="wishlist-item__content">

			<button 
				className="wishlist-item__delete js-wishlist-delete"
				onClick={(e) => props.removeFromWishlist(e, props.product)}
			>
				&times;
			</button>

			<h3 className="wishlist-item__title">
				<a className="wishlist-item__link link" href={props.product.link} target="_blank">
					{props.product.title}
				</a>
			</h3>

			<div className="wishlist-item__price">
				Цена: {props.product.price} {props.product.currency}
			</div>

		</div>

	</div>
);

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({

	removeFromWishlist: (e, product) => {
		e.preventDefault();
		dispatch(wishlistActions.wishlistDeleteProduct(product));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistItem);
