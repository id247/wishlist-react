import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CatalogPrice from '../../components/catalog/CatalogPrice';
import CatalogImage from '../../components/catalog/CatalogImage';

import * as wishlistActions from '../../actions/wishlist';

const CatalogItem = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' catalog-item')}>

		<div className="catalog-item__image">

			<CatalogImage
				src={props.product.image} 
				alt={props.product.title}
			/>

		</div>

		<div className="catalog-item__content">

			<h3 className="catalog-item__title">
				{props.product.title}
			</h3>

			<div className="catalog-item__text" dangerouslySetInnerHTML={{__html: props.product.text}} />

			<CatalogPrice 
				mix="catalog-item__price"
				price={props.product.price} 
				currency={props.product.currency} 
				shop="OZON.RU" 
				shopId="ozon" 
				shopUrl={props.product.link} 
			/>

			<div className="catalog-item__button-placeholder">
				<button 
					className="catalog-item__button button button--block button--orange button--m"
					onClick={props.addToWishlist}
					disabled={(props.isAddedToWishlist)}
				>
					{props.buttonText}
				</button>
			</div>

		</div>

	</div>
);

const mapStateToProps = (state, ownProps) => {
	const isAddedToWishlist = state.wishlist.indexOf(ownProps.product) > -1;
	const buttonText = isAddedToWishlist ? 'Добавлено' : 'Добавить в список желаний';
	return {
		wishlist: state.wishlist,
		isAddedToWishlist: isAddedToWishlist,
		buttonText: buttonText,
	}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	addToWishlist: (e) => {
		e.preventDefault();
		dispatch(wishlistActions.wishlistAddProduct(ownProps.product));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem);
