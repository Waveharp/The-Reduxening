import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState, increment} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import App from './components/App';
import {HelloContainer} from './components/Hello';
import Another from './components/Another';
import {} from './components/Counter';

// css 
require('./css/main.css');


console.log('It lives!');

const createStoreWithMiddleware = applyMiddleware(
	remoteActionMiddleware
)(createStore);
const store = createStoreWithMiddleware(reducer);
// set initial state for app
// this will eventually be replaced with a call to a database
// (likely Firebase)
const state = {
	count: 5
};
store.dispatch(setState(state));

const routes = <Route component={App}>
	<Route path="/another" component={Another} />
	<Route path="/" component={HelloContainer} />
</Route>;

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);