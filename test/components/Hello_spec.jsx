import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import Hello from '../../src/components/Hello';
import {expect} from 'chai';

describe('Hello', () => {
	it('renders hello world', () => {
		const component = renderIntoDocument(
			<Hello />
		);
		const header = scryRenderedDOMComponentsWithTag(component, 'h1');

		expect(header.length).to.equal(1);
		expect(header[0].textContent).to.equal('Hello, World!');
	});
	
});