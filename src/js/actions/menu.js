export const MENU_SET_CATEGORY 	= 'MENU_SET_CATEGORY';

export function menuSetCategory(id) {
	return {
		type: MENU_SET_CATEGORY,
		payload: id
	}
}
