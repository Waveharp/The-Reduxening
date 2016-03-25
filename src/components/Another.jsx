import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return <div className="hello">
			<h1>Look at all the neat stuff we can do with PostCSS!</h1>
			<h4>Some Lost grid columns:</h4>
			<section>
				<div className="first lost">first</div>
				<div className="second lost">second</div>
				<div className="third lost">third</div>
				<div className="fourth lost">fourth</div>
			</section>
		</div>
	}
})