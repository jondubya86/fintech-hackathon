import React from 'react';
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

const Navbar = React.createClass({
  render: function() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/page1'>Page 1</Link>
        <Link to='/stock'>Stocks</Link>
      </div>
    )
  }
})

export default Navbar;
