import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuItem from '../../components/menu/MenuItem';

import * as menuActions from '../../actions/menu';

const Menu = (props) => (
	<div className={( (props.mixClass ? props.mixClass : '') + ' menu')} id="menu">

		<ul className="menu__list">

			{props.categories && props.categories.map( (category, i) => (

				<MenuItem 
					key={i} 
					category={category}
					activeCategory={props.activeCategory}
					onClickHandler={(e) => {
						e.preventDefault();
						props.setCategory(category.id);
					}}
				/>

			))}

		</ul>

	</div>
);

Menu.propTypes = {
	mixClass: React.PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
	categories: state.xml.categories,
	activeCategory: state.menu.activeCategory,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	setCategory: (categoryId) => {
		dispatch(menuActions.menuSetCategory(categoryId));		
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
