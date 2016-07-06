var React = require('react');

var Clock = React.createClass({
    getDefaultProps: function () {
        return {
            totalSeconds: 0
        };
    },

    propTypes: {
        totalSeconds: React.PropTypes.number
    },

    formatSeconds: function(totalSeconds) {
        // totalSeconds is deciseconds
        var dsec = totalSeconds % 10;
        var seconds = Math.floor(totalSeconds / 10) % 60;
        var minutes = Math.floor(totalSeconds / 600);
        // var minutes = (totalSec - seconds) / 60;  // alternatively

        if (dsec < 10) {
            dsec = '0' + dsec;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        // seconds = ('0' + seconds).slice(-2);  // alternatively

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return minutes + ':' + seconds + ':' + dsec;
    },

    render: function() {
        var {totalSeconds} = this.props;

        return (
            <div className='clock'>
                <span className='clock-text'>
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        );
    }

});

module.exports = Clock;
