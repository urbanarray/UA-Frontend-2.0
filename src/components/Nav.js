import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to={'/'}>
                Home
            </Link>
            <Link to={'/dashboard'}>
                Dashboard
            </Link>
            <Link to={'/signup'}>
                Sign Up
            </Link>
            <Link to={'/select-skills'}>
                Select Skills 
            </Link>
        </div>
    )
}

export default Nav;