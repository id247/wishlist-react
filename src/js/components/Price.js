import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Component = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' catalog-price')}>
		<div className="catalog-price__content">
			<span className="catalog-price__price">
				{props.price} 
			</span>
			{' '}
			<span className="catalog-price__curency">
				{props.currency}
			</span>
		</div>
		<a href={props.shopUrl} className={('catalog-price__shop ' + (props.shopId ? 'catalog-price__shop--' + props.shopId : '') )}>
			{props.shop}
		</a>
	</div>
);

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
