import React, { useContext, useEffect, useState } from 'react';
import {signInWithGoogle, signOut} from "../firebaseConfig";
import AuthContext from '../context/AuthContext';
import './signinpage.css';
import { getGameById } from '../services/getgamebyid';
import { Game } from '../models/gamedetails';
import {Data} from '../models/trailers';
import { getTrailer } from '../services/getgametrailer';

export function SignInPage() {
  const [trailerSource, setTrailerSource] = useState<Data>();
  
  useEffect(() => {
    getTrailer('654').then((response) => {
      setTrailerSource(response.data.results[0].data);
    })
  },[]);

    const {user} = useContext(AuthContext);
    return(
        <div className='body'>
          {trailerSource?.max === undefined? <div style={{display: "none"}}></div>: <div className='video-container'><video  autoPlay muted loop id='background'>
            <source src={trailerSource?.max}></source>
          </video></div>}
          <div className='signin'>
            <h1>Welcome to Gamer Haven</h1>
            <p> Please sign in below</p>
            {user ? 
                <div>
                  Welcome {user.displayName} <br /><button onClick={signOut}>Sign out</button>
                </div> : 
                <div>
                  <button onClick={signInWithGoogle}>Sign in with Google</button>
                </div>
            }

          </div>

        </div>
    )
    
  }
