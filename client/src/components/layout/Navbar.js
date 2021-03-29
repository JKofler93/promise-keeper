import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Navbar({ title}) {
    return (
        <div className="navbar bg-primary">
            <h1>{title}</h1>
            <ul>
                <li>
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" exact>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Promise Keeper'
}

export default Navbar;