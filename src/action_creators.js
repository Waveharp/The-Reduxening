export function setState(state) {
	return {
		type: 'SET_STATE',
		state
	};
}

export function increment(count) {
	return {
		type: 'INCREMENT',
		count
	};
}

export function decrement(count) {
	return {
		type: 'DECREMENT',
		count
	};
}