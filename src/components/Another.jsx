import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return <div className="hello">
			<h1>Hello from a new route and a new component!</h1>
		</div>
	}
})