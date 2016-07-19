import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as productsActions from '../actions/xml';

const Menu = (props) => (
	<div>
		<ul>
			{props.categories && props.categories.map((category, i) => (
				<li key={i}>{category.title}</li>
			))}	
		</ul>		
	</div>
);

const mapStateToProps = (state, ownProps) => ({
	categories: state.xml.categories,
});

const mapDispatchToProps = (dispatch, ownProps) => ({ 
	// getUser: (element, userId) => {
	// 	element.disabled = true;
	// 	dispatch(apiActions.apiGetUser(userId))
	// 	.then( () => { element.disabled = false; })
	// },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

