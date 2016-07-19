import React from 'react';
import { Provider, connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as xmlActions from '../actions/xml';

import App from '../components/App';

class Root extends React.Component {

	componentWillMount() {
		const { dispatch } = this.props.store;

		dispatch(xmlActions.getFalseXML());		
		
	}

	render() {
		return (
			<Provider store={this.props.store}>
				<App />
			</Provider>
		);
	}
}

export default Root;
