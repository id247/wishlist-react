import { combineReducers } from 'redux';

import { profile } from './profile';
import { loading } from './loading';
import { xml } from './xml';
import { menu } from './menu';

const rootReducer = combineReducers({
	profile,
	loading,
	xml,
	menu,
});

export default rootReducer;
