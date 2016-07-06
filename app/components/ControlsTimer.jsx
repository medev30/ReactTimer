var React = require('react');

var Controls = React.createClass({
    propTypes: {
        timerStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        };
    },
    // componentWillReceiveProps: function (newProps) {
    //     console.log('componentWillReceiveProps ' + newProps.countdownStatus);
    //
    // },

    render: function() {
        var {timerStatus} = this.props;

        var renderStartStopButton = () => {
            if (timerStatus === 'started') {
                return <button className='button secondary' onClick={this.onStatusChange('stopped')}>Stop</button>;
            } else  {
                return <button className='button primary' onClick={this.onStatusChange('started')}>Start</button>;
            }
        };
        return (
            <div className='controls'>
                {renderStartStopButton()}
                <button className='button alert hollow' onClick={this.onStatusChange('clear')}>Clear</button>
            </div>
        );
    }

});

module.exports = Controls;
