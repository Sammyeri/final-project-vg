import React, { useContext } from 'react';
import { Result } from '../models/SearchGame';
import WishlistContextModel from "../context/wishListContext";

interface Props {
    game : Result;
  }
export function Wish({ game }: Props) {
    const { setList } = useContext(WishlistContextModel);
    const addToWishlist = () => {setList(game)
        console.log(game)
    }
    
    return(
        <div className="wish">
            <button onClick={addToWishlist}>Add to Wishlist</button>
        </div>
    )
}