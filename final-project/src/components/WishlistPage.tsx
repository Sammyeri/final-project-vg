import React, { useContext } from 'react';
import { Result } from '../models/SearchGame';
import WishlistContextModel from "../context/wishListContext";
import {Link} from "react-router-dom";


export function WishlistPage() {
    const { setList, wishlist, setWishListRemoval } = useContext(WishlistContextModel);
    console.log(wishlist)
    
    function onDelete(id: string) {
      const index = wishlist.findIndex(game => game.id === id);
      wishlist.splice(index, 1);
      setWishListRemoval (wishlist)
    }
      
    
    return(
        <div className="wish">
            <p>Games You Wish to Own</p>
            <div className='wishlist'>
               {wishlist.map((game)=>{
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


