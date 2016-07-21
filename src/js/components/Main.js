import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Catalog from '../components/catalog/Catalog';
import Wishlist from '../components/wishlist/Wishlist';

const Main = (props) => (
	<section className={( (props.mix ? props.mix : '') + ' main')} id="main">

		<div className="main__wrap wrap">

			<h1 className="main__title">Популярные товары для школы</h1>
			
			<Catalog mix="main__catalog" />
			
			<Wishlist mix="main__wishlist" /> 
			
		</div>

	</section>
);

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
