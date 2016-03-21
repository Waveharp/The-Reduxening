import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

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
				onClick={() => this.props.increment(this.props.count)}>
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
		count: state.get('count')
	};
}

export const CounterContainer = connect(
	mapStateToProps,
	actionCreators
)(Counter);