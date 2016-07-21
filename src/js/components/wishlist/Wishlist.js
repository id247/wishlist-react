import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WishlistEmpty from './WishlistEmpty';
import WishlistFull from './WishlistFull';

class Wishlist extends React.Component {

	componentDidMount() {
		window.addEventListener('scroll', this._handleScroll.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this._handleScroll.bind(this));
	}

	_scrollToWishlist(e) {
		e.stopPropagation();
		e.preventDefault();
		
		function scrollTo(element, to, duration) {
			if (duration <= 0) return;
			var difference = to - element.scrollTop;
			var perTick = difference / duration * 10;

			setTimeout(function() {
				element.scrollTop = element.scrollTop + perTick;
				if (element.scrollTop === to) return;
				scrollTo(element, to, duration - 10);
			}, 10);
		}

		scrollTo(document.body, 0, 600);

	}
	
	_handleScroll(e) {
		const cart = this.refs.cart;
		const listBottom = this.refs.wishlist.getBoundingClientRect().bottom;
		const cartTop = cart.getBoundingClientRect().top;
		
		if (listBottom + 100 > cartTop){
			cart.classList.remove('wishlist__cart--visible');
		}else{
			cart.classList.add('wishlist__cart--visible');			
		}
	}

	render() {
		const { props } = this;
		return (
			<div className={( (props.mix ? props.mix : '') + ' wishlist')} id="wishlist" ref="wishlist">

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
						/> 
						: <WishlistEmpty /> 
					}

				</div>

				<a 	href="#wishlist" 
					className="wishlist__cart wishlist-cart" 
					ref="cart"
					onClick={this._scrollToWishlist.bind(this)}
				>
					<div className="wishlist-cart__counter">
						{props.totalCount}
					</div>
				</a>

			</div>
		);
	}
};

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
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
