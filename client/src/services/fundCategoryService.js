export const categories = [
	{ _id: '5b21ca3eeb7f6fbccd471818', name: 'Educational' },
	{ _id: '5b21ca3eeb7f6fbccd471814', name: 'Medical' },
	{ _id: '5b21ca3eeb7f6fbccd471820', name: 'Memorial' },
	{ _id: '5b21ca3eeb7f6fbccd471821', name: 'Personal' }
];

export function getCategories() {
	return categories.filter(c => c);
}
