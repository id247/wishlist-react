import React from 'react';

import Menu from '../components/menu/Menu';

const Header = (props) => (
	<header className={( (props.mix ? props.mix : '') + ' header')} id="header">

		<div className="header__wrap wrap">

			<Menu mix="header__menu" />

		</div>

	</header>
);

Header.propTypes = {
	mix: React.PropTypes.string,
};

export default Header;

