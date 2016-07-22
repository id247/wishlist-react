import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as menuActions from '../../actions/menu';

const MenuItem = (props) => (
	<li className={'menu__item ' + (props.activeCategory === props.category.id ? 'menu__item--active' : '')}>
		<a 	href={('#category-' + props.category.id)}
			className={('menu__href ' + (props.category.icon ? 'menu__href--' + props.category.icon + ' ' : '') + (props.activeCategory === props.category.id ? 'menu__href--active' : ''))}
			onClick={props.setCategory}
			>
			<span className="menu__text">
				{props.category.title}
			</span>
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
