import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import Cards from "./Cards";
import { MovieActioin } from "./Actions/MoviesAction";


function Movies(){
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch()
    const mylistmovie = useSelector((state) => state.MovieReducer.list)
    const API_IMG="https://image.tmdb.org/t/p/w500/";
 let [MovieData, setMovieData] = useState(1)

    useEffect(() => {
       
        dispatch(MovieActioin(MovieData))
    }, [MovieData])

	// const getMovieRequest = async (searchValue) => {
	// 	const url = `https://api.themoviedb.org/3/search/movie?api_key=1583bd4a7b0da462480c756403c9bc65&query=${searchValue}`;

	// 	const response = await fetch(url);
	// 	const responseJson = await response.json();

	// 	if (responseJson.Search) {
	// 		setMovies(responseJson.Search);
	// 	}
	// };

	
    function SearchMovies(searchValue){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1583bd4a7b0da462480c756403c9bc65&query=${searchValue}`)
        .then((movie) => mylistmovie(movie.data.results))
      
        .catch((err) => console.log(err))}
    return(
        <>
           
         
		 
             <div className='item-container'>
                {mylistmovie.map((movie,index) =>   {
                    return(
                       <div >
                       
                        
                           
                           <Link to={`/view/${movie.id}`} className="btn"> <Cards  movie={movie} key={movie.index} poster_path={API_IMG+ movie.poster_path} title={movie.title} vote_average= {movie.vote_average}>
                           </Cards>
                           
                           </Link>
                        
                           </div>
                   
                    
              )  })}
             
            </div>
            < button className="btn btn-primary" onClick={()=>setMovieData(++MovieData)}>next</button>
            < button className="btn btn-danger" onClick={()=>setMovieData(MovieData>1?--MovieData:1)}>pervious</button>
        </>
    )
}

export default Movies;