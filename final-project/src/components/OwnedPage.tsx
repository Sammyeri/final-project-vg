import React, { useContext } from 'react';
import { Result } from '../models/SearchGame';
import WishlistContextModel from "../context/wishListContext";
import ownedListContext from '../context/OwnedListContext';
import {Link } from "react-router-dom";
import "./OwnedPage.css";



export function OwnedPage() {
    const { setOwnedGame, ownedList, setOwnListRemoval } = useContext(ownedListContext);
    // console.log(ownedList)
  
    
    function onDelete(id: string) {
    const index = ownedList.findIndex(game => game.id === id);
    ownedList.splice(index, 1);
    setOwnListRemoval(ownedList)
  }
    
    return(
        <div className="owned">
            <p>Games You Own</p>
            <div className='ownedlist'>
               {ownedList.map((game)=>{
                   return(
                <div className='gamelist'>
                    {game.name}
                    <li className="GameCard">
                    <Link to = {`/game/${game.id}`}><img className="gamecard"
                  src={game.background_image}
                  alt={game.name}
                /></Link>
                <button onClick={() => onDelete(game.id)}>Remove</button>
              </li>
                </div>
                   )
               })}

            </div>


            </div>)
}


