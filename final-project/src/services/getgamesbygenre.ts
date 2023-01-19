import axios from "axios";

export function GetGamesbyGenre(id: string){
    const apiKey = process.env.REACT_APP_GAME_API_KEY || "";
    return axios.get(`https://api.rawg.io/api/games`, {
        params: {
            key: apiKey,
            genre: id
        }
    });
}