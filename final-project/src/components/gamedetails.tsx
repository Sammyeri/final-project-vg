import {  Game, GamedetailsProps } from "../models/gamedetails";
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { getGameById } from "../services/getgamebyid";
import "./gamedetails.css";
import { getTrailer } from "../services/getgametrailer";
import { Trailers } from "../models/trailers";
import { Wish } from "./WishList";
import { Owned } from "./OwnedList";
import { Result } from "../models/SearchGame";

export function GameDetails() {

    let {id} =useParams();
    

    const [game, setGame] = useState<Game>();
    const [trailers, setTrailers] = useState<Trailers>();

    useEffect(() => {
        getGameById(id as string).then((response) => {
            setGame(response.data);
        })
    }, []);

    useEffect(() => {
        getTrailer(id as string).then((response) => {
            setTrailers(response.data);
        })
    },[])

  return(
      <div className="wrapper">

            <h1> {game?.name}</h1>
            <img src={game?.background_image} alt={game?.name}></img>
            <Wish game={game as unknown as Result}/>
            <Owned game={game as unknown as Result}/>
            <h2>Trailers:</h2>
            { trailers?.count != 0 ? trailers?.results.map((trailer) =>  <div className="wrapper"><p>{trailer.name}</p><video width={320} height={240} controls><source src={trailer.data.max}></source></video></div> ) : <p>No Trailers Found</p>}
            <h2>Description:</h2>
            <p>{game?.description_raw}</p>
            <h2>Website:</h2>
            <a href={game?.website}>{game?.website}</a>
            <h2>Rated:</h2>
            <p>{game?.esrb_rating != null ? game.esrb_rating.name : "no Rating Found"}</p>
            <h2>Rating:</h2>
            <p>{game?.rating}</p>
            <h2> Platforms: </h2>
            <div>
               {game?.platforms.map(platform => <p>{platform.platform.name}</p>)}
            </div>
            

        </div>
    )
}