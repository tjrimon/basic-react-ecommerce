import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='nav'>
                    <img src={logo} alt="" />
                    <ul>
                        <li><a href="/oder">Order</a></li>
                        <li><a href="/review">Order Review</a></li>
                        <li><a href="/inventory">Manage Inventory</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;