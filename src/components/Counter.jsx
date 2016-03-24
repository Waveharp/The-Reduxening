import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import './Counter.css';

export default React.createClass({
	mixins: [PureRenderMixin],
	incrementCount: function(count) {
		console.log("incrementCount");
		this.props.increment(this.props.count);
	},
	decrementCount: function() {
		console.log("decrementCount");
		this.props.decrement(this.props.count);
	},
	render: function() {
		return <div className="counter">
			<button
				onClick={() => this.incrementCount()}>
				Increment count
			</button>
			<button 
				onClick={() => this.decrementCount()}>
				Decrement count
			</button>
			<h3>Count: {this.props.count}</h3>
		</div>
	}
});
