import React from 'react';
import './header.css';

const Header = () => {
    return(
        <div className='nav'>
            <div className='title'>
                <h1>React</h1>
            </div>
            <div className='component'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Support</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;