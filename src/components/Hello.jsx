import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {CounterContainer} from './Counter';

export default React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return <div className="hello">
			<h1>Hello, World!</h1>
			<CounterContainer count={this.props.count} />			
		</div>
	}
})