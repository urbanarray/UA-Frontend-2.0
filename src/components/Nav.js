import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../assets/images/logo.png';

const NavBar = styled.div`
    background-color: #23b7e5;
    height: 8vh;
    img {
        height: 10vh;
        float: left;
        margin-left: 4vh;
        margin-top: -1vh;
    }
    button {
        background-color: inherit;
        border: none;
        font-family: inherit;
        font-size: 16px;
        color: white;
        border-left: 1px solid white;
        padding: 2.5vh 1vw 2.5vh 1vw;
        float: right;
    }
    button:hover {
        cursor: pointer;
    }
`;

const Nav = () => {
    return (
        <NavBar>
            <Link to={'/'}>
                <img src={Logo} alt="Urban Array Logo"/>
            </Link>
            <Link to={'/signup'}>
                <button>
                    Sign In 
                </button>
            </Link>
            <Link to={'/get-involved'}>
                <button>
                    Get Involved
                </button>
            </Link>
            <a href="https://urbanarray.org/donate/" rel="noopener noreferrer">
                <button>
                    Donate
                </button>
            </a>
        </NavBar>
    )
}

export default Nav;