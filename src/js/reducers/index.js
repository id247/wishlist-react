import { combineReducers } from 'redux';

import { profile } from './profile';
import { loading } from './loading';
import { xml } from './xml';

const rootReducer = combineReducers({
	profile,
	loading,
	xml,
});

export default rootReducer;
