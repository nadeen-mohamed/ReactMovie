import {combineReducers} from "redux"
import MovieReducer from "./MovieReducer"
import CartReducer from "./CartReducer"


export default combineReducers  ({

    CartReducer:CartReducer,
    MovieReducer:MovieReducer
})