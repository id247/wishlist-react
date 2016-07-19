import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Catalog from '../components/catalog/Catalog';
import Wishlist from '../components/wishlist/Wishlist';

const Main = (props) => (
	<section className={( (props.mix ? props.mix : '') + ' main')} id="main">

		<div className="main__wrap wrap">
			
			<Catalog mix="main__catalog" />
			
			{(
				props.wishlist.length > 0 
				? <Wishlist mix="main__wishlist" /> 
				: null
			)}
			

		</div>

	</section>
);

const mapStateToProps = (state, ownProps) => ({
	wishlist: state.wishlist
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
