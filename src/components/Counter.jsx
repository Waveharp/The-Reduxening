import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export const Counter = React.createClass({
	mixins: [PureRenderMixin],
	incrementCount: function() {
		console.log("incrementCount");
	},
	decrementCount: function() {
		console.log("decrementCount");
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

function mapStateToProps(state) {
	return {
		count: state.getIn('count')
	};
}

export const CounterContainer = connect(mapStateToProps)(Counter);
