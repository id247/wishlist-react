import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WishlistEmpty from './WishlistEmpty';
import WishlistFull from './WishlistFull';

class Wishlist extends React.Component {

	componentDidMount() {
		window.addEventListener('scroll', this._updateCartVisibility.bind(this));
	}
	componentDidUpdate() {
		this._updateCartVisibility();
		this._popCart();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this._updateCartVisibility.bind(this));
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
	
	_updateCartVisibility() {
		const cart = this.refs.cart;
		const listBottom = this.refs.wishlist.getBoundingClientRect().bottom;
		const cartTop = cart.getBoundingClientRect().top;
		
		if (listBottom + 100 > cartTop){
			cart.classList.remove('wishlist__cart--visible');
		}else{
			cart.classList.add('wishlist__cart--visible');			
		}
	}

	_popCart(){
		const cart = this.refs.cart;
		cart.classList.add('wishlist__cart--pop');
		setTimeout( () => {
			cart.classList.remove('wishlist__cart--pop');
		}, 300);
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
						(props.totalCount) > 0  
						? <WishlistFull /> 
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
					<div className="wishlist-cart__text">
						К списку
					</div>
				</a>

			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => ({
	wishlist: state.wishlist,
	totalCount: parseInt(state.wishlist.length),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
