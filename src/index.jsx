import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

console.log('It lives!');

ReactDOM.render(
	<Hello />,
	document.getElementById('app')
);