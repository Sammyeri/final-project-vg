import { createContext } from "react";
import { Result } from '../models/SearchGame';

export interface WishlistContextModel {
  wishlist: Result[];
//   refreshWishlist: () => void;
  setList: (game: Result) => void;
  setWishListRemoval: (gameList: Result[]) => void;
}
const defaultValue: WishlistContextModel = {
  wishlist: [],
//   refreshWishlist: () => {},
  setList: (game: Result) => [],
  setWishListRemoval: (gameList: Result[]) => []
};
const WishlistContext = createContext(defaultValue);
export default WishlistContext;