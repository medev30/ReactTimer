var React = require('react');

var CountdownForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        // returns string
        var strSeconds = this.refs.seconds.value.trim();

        // check if contains numbers only
        if (strSeconds.match(/^[0-9]+$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },

    render: function() {
        return (
            <div>
                <form ref='form' onSubmit={this.onFormSubmit} className='countdown-form'>
                    <input ref='seconds' type="text" placeholder='Enter time in saconds'/>
                    <button className='button expanded'>Start</button>
                </form>
            </div>
        );
    }

});

module.exports = CountdownForm;
