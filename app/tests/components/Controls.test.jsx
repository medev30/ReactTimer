var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render Pause button when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
            // render component
            var $el = $(ReactDOM.findDOMNode(controls));
            // find the value of Pause button - jQuery
            var $pauseButton = $el.find('button:contains(Pause)');

            // .length = the # of buttons on page
            expect($pauseButton.length).toBe(1);
        });

        it('should render Start button when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);
            // render component
            var $el = $(ReactDOM.findDOMNode(controls));
            // find the value of Start button - jQuery
            var $startButton = $el.find('button:contains(Start)');

            // .length = the # of buttons on page
            expect($startButton.length).toBe(1);
        });
    });
});
