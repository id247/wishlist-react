export const MENU_SET_CATEGORY 	= 'MENU_SET_CATEGORY';

export function menuSetCategory(id) {
	return (dispatch, getState) => {
		const categories = getState().xml.categories;
		const activeCategory = categories.filter( category => (
			category.id === id
		));
		if (activeCategory.length === 1){
			dispatch({
				type: MENU_SET_CATEGORY,
				payload: id
			})
		}
	}
}
