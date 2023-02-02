import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Reg from './Reg'
import NotFound from './NotFound';
import Navbar from './Navbar'
import Movies from './Movies';
import Try from './Try'
import SingleMovie from './SingleMovie';
import Home from './Home'
import { useState } from 'react';
import {LANGCONTEXT} from './Context/Context'
import AddToFav from'./AddToFav'
function App() {
  const [Context, setContext] = useState("en")
  return (
    <div className="App">
        <LANGCONTEXT.Provider value={{Context, setContext}}>
   <BrowserRouter> 
   <Navbar />
        <Switch> 
        <Route exact  path={"/"} component={Home} />
        <Route exact  path={"/movies"} component={Movies} />
          <Route exact path={"/login"} component={LoginForm} /> 
         
          <Route exact path={"/Reg"} component={Reg} />
           
          <Route exact path={"/addtofav"} component={AddToFav} />
          <Route exact path={"/view/:id"} component={SingleMovie} />

          <Route exact path={"*"} component={NotFound} />

        </Switch> 
      </BrowserRouter>
   
      </LANGCONTEXT.Provider>
    </div>
  );
}

export default App;
