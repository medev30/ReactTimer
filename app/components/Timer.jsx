var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var ControlsTimer = require('ControlsTimer');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            timerStatus: 'stopped'
        };
    },

    onStatusChange: function (newStatus) {
        this.setState({ timerStatus: newStatus});
    },

    // runs after either props or state get updated
    componentDidUpdate: function (prevProps, prevState) {
        console.log('prevProps ', prevProps);
        console.log('prevState ', prevState);
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    clearInterval(this.timer);
                    this.timer = null;
                    break;
                case 'clear':
                    this.setState({ count: 0 });
                    clearInterval(this.timer);
                    this.timer = null;
                    break;
            }
        }
    },

    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = null;
    },

    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });

            // if (newCount === 0) {
            //     this.setState({ countdownStatus: 'stopped' });
            // }
        }, 100);
    },

    render: function() {
        var {count, timerStatus} = this.state;

        // var renderControlArea = () => {
        //     if (timerStatus == 'stopped') {
        //         return <ControlsTimer countdownStatus={timerStatus} onStatusChange={this.onStatusChange} />;
        //     } else {
        //         return <CountdownForm onSetCountdown={this.onSetCountdown}/>;
        //     }
        // };

        return (
            <div>
                <h1 className='page-title'>Timer App</h1>
                <Clock totalSeconds={ count  }/>
                <ControlsTimer timerStatus={timerStatus} onStatusChange={this.onStatusChange} />
                {/*{ renderControlArea() }*/}
            </div>
        );
    }

});

module.exports = Timer;
