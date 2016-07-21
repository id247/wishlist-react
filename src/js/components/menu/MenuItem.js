import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as menuActions from '../../actions/menu';

const MenuItem = (props) => (
	<li className="menu__item">
		<a 	href={('#category-' + props.category.id)}
			className={('menu__href ' + (props.category.icon ? 'menu__href--' + props.category.icon + ' ' : '') + (props.activeCategory === props.category.id ? 'menu__href--active' : ''))}
			onClick={props.setCategory}
			>
			{props.category.title}
		</a>
	</li>
);

const mapStateToProps = (state, ownProps) => ({
	activeCategory: state.menu.activeCategory,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	setCategory: (e) => {
		e.preventDefault();
		dispatch(menuActions.menuSetCategory(ownProps.category.id));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
