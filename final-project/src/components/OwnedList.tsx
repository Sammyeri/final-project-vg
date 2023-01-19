import React, { useContext } from 'react';
import { Result } from '../models/SearchGame';
import WishlistContextModel from "../context/wishListContext";
import ownedListContext from "../context/OwnedListContext";


interface Props {
    game : Result 
  }
export function Owned ({ game }: Props) {
    const { setOwnedGame } = useContext(ownedListContext);
    const addToOwnedlist = () => {setOwnedGame(game)
        console.log(game)
    }
    
    return(
        <div className="owned">
            <button onClick={addToOwnedlist}>Add to Owned</button>
        </div>
    )
    
}