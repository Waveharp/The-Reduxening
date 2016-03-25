import React from 'react';
import {Link} from 'react-router';
import NavLink from './NavLink';

export default React.createClass({
	render: function() {
		return ( 
			<div>
				<h1>The Reduxening</h1>
				<ul role="nav">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/another">Examples</NavLink></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
});