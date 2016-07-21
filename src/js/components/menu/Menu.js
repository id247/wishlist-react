import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuItem from './MenuItem';

const Menu = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' menu')} id="menu">

		<ul className="menu__list">

			{props.categories && props.categories.map( (category, i) => (

				<MenuItem 
					key={i} 
					category={category}
				/>

			))}

		</ul>

	</div>
);

const mapStateToProps = (state, ownProps) => ({
	categories: state.xml.categories,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
