import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
				<button className="button button--orange button--m js-add-to-list">
					Купить
				</button>
			</div>

		</div>

	</div>
);

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem);
