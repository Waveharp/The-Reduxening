import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return <div className="hello">
			<h1>Look at all the neat stuff we can do with PostCSS!</h1>
			<h4>Some Lost grid columns:</h4>
			<section className="lostGrid">
				<div className="first lost">first</div>
				<div className="second lost">second</div>
				<div className="third lost">third</div>
				<div className="fourth lost">fourth</div>
			</section>
			<section className="rucksacks">
				<p className="respType">Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Ehye ep ee shogg, li'hee sll'ha hlirgh li'hee phlegeth ahoth ee Dagon, R'lyeh cebunma ilyaa shugg n'ghft ooboshu r'luh Nyarlathotep. R'lyeh y-throd gof'nn ng'bthnk li'heenyth hai Dagon s'uhn ehyeagl, ftaghu hupadgh 'bthnk h'ron shtunggliog Cthulhu orr'e, shugg cebunma Shub-Niggurath ebunma hai ehye Azathoth. Chtenff Azathoth phlegeth y-'bthnk ilyaa lw'nafh vulgtm nahafh'drn geb lloigor h'Hastur f'kn'a, lw'nafh hrii ya ebunma h'ee ah lloig athg ebunma gof'nn naHastur, grah'n Nyarlathotepyar ya sgn'wahl n'gha stell'bsna vulgtm fm'latgh ebunma Dagonog. Azathoth y-shtunggli shtunggli lw'nafh throd nog lloig lw'nafh, uln wgah'n cAzathoth mg kn'a ron Azathothog, chtenff 'fhalma nnnlw'nafh ooboshu shogg sll'ha. </p>
			</section>
		</div>
	}
})