import axios from "axios";

export function getDust(){
    const apiKey = process.env.REACT_APP_GAME_API_KEY || "";
    return axios.get(`https://api.rawg.io/api/games`, {
        params: {
            key: apiKey,
            dates: "1990-11-21,1990-12-31",
            odering: "released"
        }
    });
}