import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from '../components/Loading';
import Header from '../components/Header';
import Main from '../components/Main';

class App extends React.Component {


	render() {	
		return (
			<div className="page">
				<Loading mix="page__loader" />

				<Header mix="page__header" />
				
				<Main mix="page__main" />
				
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
