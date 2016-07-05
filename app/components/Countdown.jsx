var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function() {
        return {
            count: 10,
            countdownStatus: 'stopped'
        };
    },

    // runs after either props or state get updated
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    },

    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000);
    },

    onSetCountdown: function(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },

    render: function() {
        return (
            <div>
                <Clock totalSeconds={this.state.count} />
                <CountdownForm onSetCountdown={this.onSetCountdown}/>
            </div>
        );
    }

});

module.exports = Countdown;
