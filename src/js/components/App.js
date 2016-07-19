import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from '../components/Loading';
import Menu from '../components/Menu';
import Products from '../components/Products';

class App extends React.Component {


	render() {	
		return (
			<div className="page">
				<Loading mix="page__loader" />

				<Menu />
				<Products />
				
			</div>
		);
	}

};

const mapStateToProps = (state, ownProps) => ({
	//profile: state.profile,
});

const mapDispatchToProps = (dispatch, ownProps) => ({ 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
