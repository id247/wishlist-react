import { combineReducers } from 'redux';

import { loading } from './loading';
import { xml } from './xml';
import { menu } from './menu';
import { wishlist } from './wishlist';

const rootReducer = combineReducers({
	loading,
	xml,
	menu,
	wishlist,
});

export default rootReducer;
