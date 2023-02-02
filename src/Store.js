import {createStore,applyMiddleware} from "redux"
import MovieReducer from"./reducer/MovieReducer"
import compain from "./reducer/Compain"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(compain,composeWithDevTools((applyMiddleware(thunk))))


export default store;