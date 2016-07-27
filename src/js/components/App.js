import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as xmlActions from '../actions/xml';

import Loading from '../components/Loading';
import Header from '../components/Header';
import Main from '../components/Main';

class App extends React.Component {

	componentDidMount() {
		this.props.init();	
	}

	render() {	
		const { props } = this;
		
		return (
			<div className="page">
				<Loading 
					mix="page__loader" 
					loading={props.loading}
				/>

				<Header mix="page__header" />
				
				<Main mix="page__main" />
				
			</div>
		);
	}

};

App.propTypes = {
};


const mapStateToProps = (state, ownProps) => ({
	loading: state.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({ 
	init: () => {
		dispatch(xmlActions.getFalseXML());	
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
