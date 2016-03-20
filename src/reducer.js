import {Map} from 'immutable';

function setState(state, newState) {
	return state.merge(newState);
}

function increment(state, count) {
	const currentCount = state.get('count');
	return state.set('count' + 1);
}

export default function(state = Map(), action) {
	switch (action.type) {
		case 'SET_STATE':
			return setState(state, action.state);
		case 'INCREMENT':
			return increment(state, action.count);
	}
	return state;
}