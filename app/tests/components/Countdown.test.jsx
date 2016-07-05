var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('onSetCountdown', () => {
        it('should set state to started and count down', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.onSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            // check if counter decreased by 1 after 1 sec
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();  // mocha will wait for done() to stop testing.
            },1001 );
        });
        it('should never set count less than 0', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.onSetCountdown(1);

            // check if counter decreased by 1 after 1 sec
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();  // mocha will wait for done() to stop testing.
            },3001 );
        });
    });
});
