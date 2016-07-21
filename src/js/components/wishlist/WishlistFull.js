import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WishlistItem from './WishlistItem';

const WishlistFull = (props) => (
	<div className="wishlist__full">

		<ul className="wishlist__list">
			
			{props.wishlist && props.wishlist.map((product, i) => (
				<WishlistItem 
					key={i}	
					mix="wishlist__item"
					product={product} 
				/>
			))}

		</ul>

		{/* <div className="wishlist__total-price" id="wishlist-total-price">
			Итого: {props.totalPrice} руб
		</div> */}

		<div className="wishlist__button-placeholder">

			<a 	href={props.ozonLink} 
				className="wishlist__button button button--orange button--m" 
				target="_blank"
			>
				Купить на OZON.RU
			</a>

		</div>

	</div>
);

const mapStateToProps = (state, ownProps) => ({
	ozonLink: 'http://www.OZON.ru/?context=cart&id=' + state.wishlist.join(',') +  '&partner=dnevnik_ru',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistFull);
