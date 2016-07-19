import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Catalog from '../components/Catalog';

const Main = (props) => (
	<section className={( (props.mix ? props.mix : '') + ' main')} id="main">

		<div className="main__wrap wrap">
			
			<Catalog mix="main__catalog" />

			<div className="main__wishlist wishlist">

				<ul className="wishlist__list" id="wishlist-list">

				</ul>

				<div className="wishlist__total-price" id="wishlist-total-price">

				</div>

				<div className="wishlist__button-placeholder">

					<a href="#" className="wishlist__button button button--orange button--l hidden" id="js-wishlist-buy" target="_blank">Купить на Озон.ру</a>

				</div>

			</div>

		</div>

	</section>
);

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
