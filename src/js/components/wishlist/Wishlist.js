import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WishlistEmpty from './WishlistEmpty';
import WishlistFull from './WishlistFull';

const Wishlist = (props) => (
	<div className={( (props.mix ? props.mix : '') + ' wishlist')} id="wishlist">

		<h3 className="wishlist__title">
			ДОБАВЛЕННЫЕ ТОВАРЫ
			<span className="wishlist__counter">
				{props.totalCount}
			</span>
		</h3>

		<div className="wishlist__content">

			{
				parseInt(props.totalCount) > 0  
				? <WishlistFull 
					wishlist={props.wishlist} 
					totalPrice={props.totalPrice} 
					ozonLink={props.ozonLink} 
				/> 
				: <WishlistEmpty /> 
			}

		</div>

	</div>
);



const mapStateToProps = (state, ownProps) => {
	const wishlist = [];
	let totalPrice = 0;
	let totalCount = 0;

	state.xml.products.forEach( (product) => {
		if (state.wishlist.indexOf(parseInt(product.id)) > -1){
			wishlist.push(product);
			totalPrice += parseInt(product.price);
			totalCount++;
		}
	});

	return {
		wishlist: wishlist,
		totalPrice: totalPrice,
		totalCount: totalCount,
		ozonLink: 'http://www.OZON.ru/?context=cart&id=' + state.wishlist.join(',') +  '&partner=dnevnik_ru',
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
