import'./Cards.css'

import { CartAction, Counter } from './Actions/CartAction';
import {RemoveFavorite} from'./Actions/CartAction'
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';

function Cards(props){
    
  const fav=  useSelector((state) => state.CartReducer.cart)
    const dispatch = useDispatch()
    const addFavourite =(movie)=>{
        const find = fav.includes(movie)
        if(!find){
            dispatch(CartAction(fav.push(movie)))
      dispatch(Counter(fav.length))
        }
    }
   
    
    return(
        <div className='card '>
              <img className="card-img-top img" src={ props.poster_path} />
        
            <div className="card-body">
            <h3 className="card-title">{props.id}</h3>
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.overview}</p>
                <h5 className="card-text">{props.vote_average}</h5>
                <button className='btn' style={{backgroundColor:'#CCB07C', color:'#926239'}} onClick={()=>(addFavourite(props.movie))}>Add To Fav</button>
            
 {/* <Link className='btn' style={{backgroundColor:'#CCB07C', color:'#926239'}}>Add To Fav</Link> */}

            </div>
        </div>
       
    )
}

export default Cards;