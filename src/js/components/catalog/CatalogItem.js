import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Price from '../../components/Price';

import * as wishlistActions from '../../actions/wishlist';

const CatalogItem = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' catalog-item')}>

		<div className="catalog-item__image-placeholder">
			<img className="catalog-item__image" src={props.product.image} alt={props.product.title} />
		</div>

		<div className="catalog-item__content">

			<h3 className="catalog-item__title">
				{/* <a className="catalog-item__link link" href={props.product.link} target="_blank"> */}
					{props.product.title}
				{/* </a> */}
			</h3>

			<div className="catalog-item__text" dangerouslySetInnerHTML={{__html: props.product.text}} />

			<Price 
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
					onClick={(e) => props.addToWishlist(e, props.product)}
					disabled={(props.isAddedToWishlist)}
				>
					{props.buttonText}
				</button>
			</div>

		</div>

	</div>
);

const mapStateToProps = (state, ownProps) => {
	const isAddedToWishlist = state.wishlist.indexOf(ownProps.product.id) > -1;
	const buttonText = isAddedToWishlist ? 'Добавлено' : 'Добавить в лист желаний';
	return {
		wishlist: state.wishlist,
		isAddedToWishlist: isAddedToWishlist,
		buttonText: buttonText,
	}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	addToWishlist: (e, product) => {
		e.preventDefault();
		dispatch(wishlistActions.wishlistAddProduct(product));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem);
