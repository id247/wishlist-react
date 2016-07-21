import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Menu from '../components/menu/Menu';

const Header = (props) => (
	<header className={( (props.mix ? props.mix : '') + ' header')} id="header">

		<div className="header__wrap wrap">

			<Menu mix="header__menu" />

		</div>

	</header>
);

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

