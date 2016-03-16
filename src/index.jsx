import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import Hello from './components/Hello';
import Another from './components/Another';

console.log('It lives!');

const routes = <Route component={App}>
	<Route path="/another" component={Another} />
	<Route path="/" component={Hello} />
}
</Route>;

ReactDOM.render(
	<Router history={hashHistory}>{routes}</Router>,
	document.getElementById('app')
);