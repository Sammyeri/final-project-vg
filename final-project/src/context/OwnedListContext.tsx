import { createContext } from "react";
import { Result } from '../models/SearchGame';

export interface OwnedListContext {
  ownedList: Result[];
//   refreshWishlist: () => void;
  setOwnedGame: (game: Result) => void;
  setOwnListRemoval: (gameList: Result[]) => void;
}
const defaultValue: OwnedListContext = {
  ownedList: [],
//   refreshWishlist: () => {},
  setOwnedGame: (game: Result) => [],
  setOwnListRemoval: (gameList: Result[]) => []
}
const OwnedListContext = createContext(defaultValue);
export default OwnedListContext;