import { combineReducers } from 'redux';

import { profile } from './profile';
import { loading } from './loading';
import { xml } from './xml';
import { menu } from './menu';
import { wishlist } from './wishlist';

const rootReducer = combineReducers({
	profile,
	loading,
	xml,
	menu,
	wishlist,
});

export default rootReducer;
