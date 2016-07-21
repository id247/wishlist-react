import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as menuActions from '../actions/menu';

const Menu = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' menu')} id="menu">

		<ul className="menu__list">

			{props.categories && props.categories.map( (category, i) => (

				<li className="menu__item" key={i}>
					<a 	href={('#category-' + category.id)}
						className={('menu__href ' + (category.icon ? 'menu__href--' + category.icon + ' ' : '') + (props.activeCategory === category.id ? 'menu__href--active' : ''))}
						onClick={(e) => props.setCategory(e, category.id)}
						>
						{category.title}
					</a>
				</li>

			))}

		</ul>

	</div>
);

const mapStateToProps = (state, ownProps) => ({
	categories: state.xml.categories,
	activeCategory: state.menu.activeCategory,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	setCategory: (e, categoryId) => {
		e.preventDefault();
		dispatch(menuActions.menuSetCategory(categoryId));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
