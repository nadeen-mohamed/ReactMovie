import './Cards.css'
import { useSelector, useDispatch } from 'react-redux';
import { RemoveFavorite } from './Actions/CartAction';
import {Counter} from './Actions/CartAction'
function MyFavorite(props) {

    const dispatch = useDispatch();
    const fav = useSelector((state) => state.CartReducer.cart)

    const deletemovie = (movie) => {
        console.log(movie.id) 
        const movieindex=fav.findIndex(ele=>ele.id === movie.id)
        if(movieindex > -1){
            dispatch(RemoveFavorite(fav.splice(movieindex, 1)))
            dispatch(Counter(fav.length))
        }
        
    }
    return (
        <>

            <div >


                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-2 ">
                            <img className="card-img-top img" src={props.poster_path} />
                        </div>
                        <div className="col-5">
                            <h5 className="text-warning">{props.title}</h5>
                            <p className="text">{props.overview}</p>
                            <button className="btn btn-danger" onClick={()=>(deletemovie(props))}>delete</button>
                        </div>
                    </div>
                </div>



            </div>



        </>
    )

}

export default MyFavorite;