import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return ( 
			<div>
				<h1>The Reduxening</h1>
				<ul role="nav">
					<li><Link to="/" activeClassName="active">Home</Link></li>
					<li><Link to="/another" activeClassName="active">Examples</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
});