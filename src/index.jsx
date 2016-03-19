import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import Hello from './components/Hello';
import Another from './components/Another';
import Counting from './components/Counting';


console.log('It lives!');

const store = createStore(reducer);
store.dispatch({
	type: 'SET_STATE',
	state: {
		count: 5
	}
});

const routes = <Route component={App}>
	<Route path="/another" component={Another} />
	<Route path="/counting" component={Counting} />
	<Route path="/" component={Hello} />
}
</Route>;

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);