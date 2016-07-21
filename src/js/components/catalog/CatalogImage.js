import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const CatalogImage = (props) => (
	<div className="catalog-image">
		<div className="catalog-image__inner">
			<img className="catalog-image__image" src={props.src} alt={props.alt} />
		</div>
	</div>
);

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogImage);
