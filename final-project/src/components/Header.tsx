import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {

    return (
        <div className="head">
            <div className="title">
                <h4>Gamer Haven</h4>
            </div>
            <Link to="/profile">Profile</Link>
            <div className="header-right">
                <Link to="/home">Home</Link>
                <Link to="/owned">Owned Games</Link>
                <Link to="/wish">Wish List</Link>
                <Link to="/">Log Out</Link>
            </div>
        </div>
    )
}