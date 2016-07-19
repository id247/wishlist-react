import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as wishlistActions from '../../actions/wishlist';

const CatalogItem = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' catalog-item')}>

		<div className="catalog-item__image-placeholder">
			<img className="catalog-item__image" src={props.product.image} alt={props.product.title} />
		</div>

		<div className="catalog-item__content">

			<h3 className="catalog-item__title">
				<a className="catalog-item__link link" href={props.product.link} target="_blank">
					{props.product.title}
				</a>
			</h3>

			<div className="catalog-item__price">
				Цена: {props.product.price} {props.product.currency}
			</div>

			<div className="catalog-item__text" dangerouslySetInnerHTML={{__html: props.product.text}}>
				
			</div>

			<div className="catalog-item__button-placeholder">
				<button 
					className="button button--orange button--m"
					onClick={(e) => props.addToWishlist(e, props.product)}
					disabled={(props.wishlist.indexOf(props.product.id) > -1)}
				>
					Купить
				</button>
			</div>

		</div>

	</div>
);

const mapStateToProps = (state, ownProps) => ({
	wishlist: state.wishlist,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	addToWishlist: (e, product) => {
		e.preventDefault();
		dispatch(wishlistActions.wishlistAddProduct(product));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem);
