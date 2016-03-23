import {Map} from 'immutable';

function setState(state, newState) {
	return state.merge(newState);
}

function increment(state, count) {
	count++;
	return state.set('count', count);
}

function decrement(state, count) {
	count--;
	return state.set('count', count);
}

export default function(state = Map(), action) {
	switch (action.type) {
		case 'SET_STATE':
			return setState(state, action.state);
		case 'INCREMENT':
			return increment(state, action.count);
		case 'DECREMENT':
			return decrement(state, action.count);
	}
	return state;
}