var React = require('react');
var {Link, IndexLink} = require('react-router');

var PropTypes = React.PropTypes;

var Nav = React.createClass({

    render: function() {
        return (
            <div className='top-bar'>
                <div className='top-bar-left'>
                    <ul className='menu'>
                        <li className='menu-text'>React Time App</li>
                        <li >
                            <IndexLink to='/' activeClassName='active-link'> Timer </IndexLink>
                        </li>
                        <li>
                            <Link to='/countdown' activeClassName='active-link' > Countdown </Link>
                        </li>
                    </ul>
                </div>
                <div className='top-bar-right'>
                        <ul className='menu'>
                            <li className='menu-text'>Created for <a href='http://' target='_blank' >Alex</a></li>
                        </ul>

                    {/*<form onSubmit={this.onSearch}>
                        <ul className='menu'>
                            <li>
                                <input type='search' ref='inputSearch' placeholder='Search city'/>
                            </li>
                            <li>
                                <button type='submit' className='button'>Get Weather</button>
                            </li>
                        </ul>
                    </form>*/}

                </div>
            </div>
        );
    }

});

module.exports = Nav;


// var old = (
//     <div>
//         <h2>Nav Component </h2>
//         <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink>
//         <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}> About </Link>
//         <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}> Examples </Link>
//     </div>
//
// );
