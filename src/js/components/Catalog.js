import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CatalogItem from '../components/CatalogItem';

const Catalog = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' catalog')} id="catalog">

		<ul className="catalog__category">

			{props.products && props.products.map((product, i) => (
				<CatalogItem 
					key={i}	
					mix="catalog__item"
					product={product} 
				/>
			))}

		</ul>

	</div>
);

const mapStateToProps = (state, ownProps) => ({
	//filter product by active category
	products: state.xml.products.filter( product => (
		product.categories.indexOf( state.menu.activeCategory ) > -1 
	)),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
