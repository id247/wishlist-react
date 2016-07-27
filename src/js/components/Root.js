import React from 'react';
import { Provider, connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import App from '../components/App';

class Root extends React.Component {

	render() {
		return (
			<Provider store={this.props.store}>
				<App />
			</Provider>
		);
	}
}

export default Root;
