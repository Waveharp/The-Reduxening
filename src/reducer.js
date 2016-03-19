function setState(state, newState) {
	return state.merge(newState);
}

export default function() {
	switch (action.type) {
		case 'SET_STATE':
			return setState(state, action.state);
	}
	return state;
}