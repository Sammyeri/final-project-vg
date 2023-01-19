import React from 'react';
import SearchList from '../components/SearchList';
import HomePage from './homepage';
import './home.css';
import './SearchList.css';

export function Home() {

    return(
        <div className="home">
            <p>Home</p>
            <SearchList></SearchList>
            <HomePage></HomePage>
        </div>
    )
}