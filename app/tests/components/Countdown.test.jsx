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

            expect(countdown.state.count).toBe(100);  // seconds are converted to deciseconds
            expect(countdown.state.countdownStatus).toBe('started');

            // check if counter decreased by 1 after 1 sec
            // need to use done() inside setTimeout()
            setTimeout(() => {
                expect(countdown.state.count).toBe(90);
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

        it('should pause countdown on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.onSetCountdown(3);    //seconds
            countdown.onStatusChange('paused');

            setTimeout(() => {
                expect(countdown.state.count).toBe(30); //deciseconds
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            },1001 );
        });
        
        it('should reset count on stopped status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.onSetCountdown(3);
            countdown.onStatusChange('stopped');

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            },1001 );
        });
    });
});
