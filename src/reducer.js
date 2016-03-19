import {Map} from 'immutable';

function setState(state, newState) {
	return state.merge(newState);
}

function incrementCount(state, count) {
	const currentCount = state.get('count');
	return state.set(currentCount++);
}

export default function(state = Map(), action) {
	switch (action.type) {
		case 'SET_STATE':
			return setState(state, action.state);
		case 'INCREMENT_COUNT':
			return incrementCount(state, action.count);
	}
	return state;
}