import axios from "axios";
import { useEffect, useState } from "react";
import { GetGame } from "../models/getgame";
import { getGames } from "../services/getgames";
import { GetGamesbyGenre } from "../services/getgamesbygenre";
import { getGamesByPlatform } from "../services/getgamesbyplatform";
import './homepage.css';
import { Link } from "react-router-dom";
import { getDust } from "../services/getdust";
import SearchList from "./SearchList";
import { Owned } from "./OwnedList";
import { Wish } from "./WishList";



export default function HomePage() {
    const[results, setResults] = useState<GetGame[]>([]);
    const[resultsByGenre, setResultsByGenre] = useState<GetGame[]>([]);
    const [showGenre, setShowGenre] = useState(false);
    const [resultsByPlatform, setResultsByPlatform] = useState<GetGame[]>([]);
    const [showPlatform, setShowPlatform] = useState(false);
    const [dust, setDust] = useState<GetGame[]>([]);
    
   useEffect(() => {
    getGames().then((response) =>{
        setResults(response.data.results);
    })
   }, []);

   useEffect(() => {
    getDust().then((res) => {
        setDust(res.data.results);
    })
   }, []);

   function gamesByGenre(id: string){
        GetGamesbyGenre(id).then((response) => {
            setResultsByGenre(response.data.results);
        })
   }

   function gamesByPlatform(id:string){
        getGamesByPlatform(id).then((response) => {
            setResultsByPlatform(response.data.results);
        })
   }

    return (
        <div>
            <div className="main-body">
                <h2>Selection of Games</h2>
                <div className="gamelist scrollmenu">
                    {results.map((game) => (
                        <div className="gamecard">
                            <Link to={`/game/${game.id}`}><img src={game.background_image} /></Link>
                            <p>{game.name}</p>
                        </div>
                    ))}
                </div>
                <h2>Blow off the Dust</h2>
                <div className="gamelist scrollmenu">
                        {dust.map((game) => (
                            <div className="gamecard">
                                <Link to = {`/game/${game.id}`}><img src={game.background_image} /></Link>
                                <p>{game.name}</p>
                            </div>
                        ))}
                </div>
                <button onClick={() => setShowGenre(!showGenre)}>Genre</button>
                    <div className="options" style={{ display: showGenre ? "block": "none"}}>
                        <p className="button" onClick={() => {gamesByGenre("4"); setShowGenre(!showGenre)}}>Action</p>
                        <p className="button" onClick={() => {gamesByGenre("51"); setShowGenre(!showGenre)}}>Indie</p>
                        <p className="button" onClick={() => {gamesByGenre("3"); setShowGenre(!showGenre)}}>Adventure</p>
                        <p className="button" onClick={() => {gamesByGenre("5"); setShowGenre(!showGenre)}}>RPG</p>
                        <p className="button" onClick={() => {gamesByGenre("10"); setShowGenre(!showGenre)}}>Strategy</p>
                    </div>
                <div className="scrollmenu">
                    {resultsByGenre.map((game) => (
                        <div className="gamecard">
                            <Link to = {`/game/${game.id}`}><img src= {game.background_image} /></Link>
                            <p>{game.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <button onClick={() => setShowPlatform(!showPlatform)}>Platform</button>
                    <div className="options" style={{ display: showPlatform ? "block": "none"}}>
                        <p className="button" onClick={() => {gamesByPlatform("4"); setShowPlatform(!showPlatform)}}>PC</p>
                        <p className="button" onClick={() => {gamesByPlatform("187"); setShowPlatform(!showPlatform)}}>Playstation 5</p>
                        <p className="button" onClick={() => {gamesByPlatform("18"); setShowPlatform(!showPlatform)}}>Plastation 4</p>
                        <p className="button" onClick={() => {gamesByPlatform("1"); setShowPlatform(!showPlatform)}}>Xbox One</p>
                        <p className="button" onClick={() => {gamesByPlatform("186"); setShowPlatform(!showPlatform)}}>Xbox series S/X</p>
                        <p className="button" onClick={() => {gamesByPlatform("7"); setShowPlatform(!showPlatform)}}>Nintendo Switch</p>
                    </div>
                <div className="scrollmenu">
                    {resultsByPlatform.map((game) => (
                        <div className="gamecard">
                            <Link to = {`/game/${game.id}`}><img src= {game.background_image} alt={game.name}/></Link>
                            <p>{game.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}