import axios from "axios";



export const getGames = () => {
    const apiKey = process.env.REACT_APP_GAME_API_KEY || "";
    return axios.get(`https://api.rawg.io/api/games`, {
        params: {
            key: apiKey,
        }
    });
}
