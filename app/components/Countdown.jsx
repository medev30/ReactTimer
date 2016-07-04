var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function() {
        return { count: 10 };
    },

    onSetCountdown: function(seconds) {
        this.setState({
            count: seconds
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
