import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Cards from "./Cards";
import'./Cards.css'


function SingleMovie(props){
    const API_IMG="https://image.tmdb.org/t/p/w500/";
    const param = useParams()
   
    
    // console.log(useParams)
    // {id:2}

    const[singlemovie, setsinglemovie] = useState({})

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=1583bd4a7b0da462480c756403c9bc65`)
        .then((movie) => setsinglemovie(movie.data))
      
        .catch((err) => console.log(err))
    }, [])
 
    return(
        <>
  <div className="text-center ml-5">
    <h2>singlemovie</h2>
         <div class="container">
         <Cards card="ml-5" key={singlemovie.id} poster_path={API_IMG+singlemovie.poster_path} title={singlemovie.title} overview= {singlemovie.overview}></Cards> 
        
         </div>
          
           </div>     
                        
        </>
       
    )
}

export default SingleMovie;