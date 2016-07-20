import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const WishlistEmpty = (props) => (
	<div className="wishlist__empty">
		Отложите товары <br/>
		и они появятся в этом списке!
	</div>
);

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistEmpty);
