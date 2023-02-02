import'./Cards.css'
import { useSelector } from "react-redux";
import Myfav from'./Myfav'
function FavoriteComponent() {
    const API_IMG="https://image.tmdb.org/t/p/w500/";
    const fav=  useSelector((state) => state.CartReducer.cart) 

    return(
        <>
           {fav.map((singlemovie) =>   {
            
                return(
                    <Myfav key={singlemovie.title} poster_path={API_IMG+ singlemovie.poster_path}
                    id={singlemovie.id}
                    title={singlemovie.title} 
                    overview={singlemovie.overview}  /> 
                    
                )
                
            })}
        </>
       
         
     
       
    )
}

export default FavoriteComponent