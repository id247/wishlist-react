import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CatalogImage from '../../components/catalog/CatalogImage';
import CatalogPrice from '../../components/catalog/CatalogPrice';

import * as wishlistActions from '../../actions/wishlist';

const WishlistItem = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' wishlist-item')}>

		<div className="wishlist-item__image">
			
			<CatalogImage
				src={props.product.image} 
				alt={props.product.title}
			/>

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

			<CatalogPrice 
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
		dispatch(wishlistActions.wishlistDeleteProduct(ownProps.product.id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistItem);
