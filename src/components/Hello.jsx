import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Counter from './Counter';
import * as actionCreators from '../action_creators';

export const Hello = React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return <div className="hello">
			<h1>Hello, World!</h1>
			<div>
				<Counter {...this.props}/>
			</div>
		</div>
	}
});

function mapStateToProps(state) {
	return {
		count: state.get('count')
	};
}

export const HelloContainer = connect(
	mapStateToProps,
	actionCreators
)(Hello);