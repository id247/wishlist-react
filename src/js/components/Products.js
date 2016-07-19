import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as productsActions from '../actions/xml';

const Products = (props) => (
	<div>
		<ul>
			{props.products && props.products.map((product, i) => (
				<li key={i}>{product.title}</li>
			))}	
		</ul>		
	</div>
);

const mapStateToProps = (state, ownProps) => ({
	products: state.xml.products,
});

const mapDispatchToProps = (dispatch, ownProps) => ({ 
	// getUser: (element, userId) => {
	// 	element.disabled = true;
	// 	dispatch(apiActions.apiGetUser(userId))
	// 	.then( () => { element.disabled = false; })
	// },
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

