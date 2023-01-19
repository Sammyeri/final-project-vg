import { ReactNode, useContext, useEffect, useState } from "react";
import { Result } from '../models/SearchGame';
import WishlistContextModel from "./wishListContext";

export default function WishlistContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<Result[]>([]);
  const setList = (game: Result) => {
      setWishlist(wishlist => [...wishlist, game])
  }
  const setWishListRemoval = (gameList: Result[]) => {
    setWishlist([...gameList])
  }
//   useEffect(() => {
//     // useEffect to only register once at start
//     fetchAllGames().then((res) => setWishlist(res));
//   }, []);
  function refreshWishlist() {
    // fetchAllGames().then((res) => setWishlist(res));
  }
  return (
    <WishlistContextModel.Provider value={{ wishlist, setList, setWishListRemoval }}>
      {children}
    </WishlistContextModel.Provider>
  );
}