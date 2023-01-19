import { ReactNode, useContext, useEffect, useState } from "react";
import { Result } from '../models/SearchGame';
import WishlistContextModel from "./wishListContext";
import OwnedListContext from "./OwnedListContext";

export default function OwnedContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [ownedList, setOwnedlist] = useState<Result[]>([]);
  const setOwnedGame = (game: Result) => {
      setOwnedlist(ownedList => [...ownedList, game])
  }
  const setOwnListRemoval = (gameList: Result[]) => {
    setOwnedlist([...gameList])
  }
//   useEffect(() => {
//     // useEffect to only register once at start
//     fetchAllGames().then((res) => setWishlist(res));
//   }, []);
  function refreshWishlist() {
    // fetchAllGames().then((res) => setWishlist(res));
  }
  return (
    <OwnedListContext.Provider value={{ ownedList, setOwnedGame, setOwnListRemoval }}>
      {children}
    </OwnedListContext.Provider>
  );
}