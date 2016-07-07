var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
        it('should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={620}/>);

            // ReactDOM.findDOMNode convert our component <Clock> to HTML and pass it to jQuery
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02:00');
        });
    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 6150;
            var expected = '10:15:00';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it('should format seconds when min/ses are less than 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 610;
            var expected = '01:01:00';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
});
