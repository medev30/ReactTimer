var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
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
                case 'stopped':
                    this.setState({ count: 0 });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
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

    onStatusChange: function (newStatus) {
        this.setState({ countdownStatus: newStatus});
    },

    render: function() {
        var {count, countdownStatus} = this.state;

        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.onStatusChange} />;
            } else {
                return <CountdownForm onSetCountdown={this.onSetCountdown}/>;
            }
        };
        return (
            <div>
                <Clock totalSeconds={count} />
                { renderControlArea() }
            </div>
        );
    }

});

module.exports = Countdown;
