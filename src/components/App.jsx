import React from 'react';

const count = 3;

export default React.createClass({
	render: function() {
		return React.cloneElement(this.props.children, {count: count});
	}
});