import axios from "axios";
import SearchList from "../components/SearchList";
import { SearchGame } from "../models/SearchGame";


export const getSearchGames = (search: string) => {
    const apiKey = process.env.REACT_APP_GAME_API_KEY || "";
    return axios.get('https://api.rawg.io/api/games', {
        params: {
            key: apiKey,
            search: search
        }
    })}
