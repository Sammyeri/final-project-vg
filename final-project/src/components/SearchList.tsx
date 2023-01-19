import React, { useEffect, useState } from 'react'
import { Result } from '../models/SearchGame';
import { getSearchGames } from '../services/SearchService'
import './SearchList.css';
import { Owned } from './OwnedList';
import { Wish } from './WishList';
import {Link} from "react-router-dom";
import ownedListContext from "../context/OwnedListContext";
import "./homepage.css";
import "./SearchList.css"

export default function SearchList() {
    const [inputValue, setInputValue] = useState ("");
    const [results, setSearchResults] = useState<Result[]>([])
    const onChange = (event: any)=>{
      event.preventDefault()
      setInputValue(event.target.value)
    } 
    const onSubmit = (event: any)=>{
        event.preventDefault()
           const fetch = async () => {
         try {
           const res = await getSearchGames(inputValue);
           setSearchResults(res.data.results)
           console.log(res)
           // setData({ ...data, results: res.data });
         } catch (err) {
           console.error(err);
         }
       };
       fetch()
      }
    
    return (
        <div>
          <form className= 'searchForm'>
            <input className='searchInput' onChange={(event) => onChange(event)}/>
            <button className= 'searchButton' onClick={(event) => onSubmit(event)}>Search</button>
          </form>
          <div className="scrollmenu">
          {results.map((result) => {
          
          return(
            <div className='GameList'>
              {result.name}
              <ul className= "list">
            <li className="searchlist">
              <Link to = {`/game/${result.id}`}><img className="gamecard"
                  src={result.background_image}
                  alt={result.name}
                /></Link>
              </li>
              </ul>
              <Owned game={result}/><Wish game={result}/>
            </div>
          )}
          )}
          </div>
          </div>
       )}
