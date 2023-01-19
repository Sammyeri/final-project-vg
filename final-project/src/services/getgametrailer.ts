import axios from "axios";



export const getTrailer = (id: string) => {
    const apiKey = process.env.REACT_APP_GAME_API_KEY || "";
    return axios.get(`https://api.rawg.io/api/games/${id}/movies`, {
        params: {
            key: apiKey,
        }
    });
}