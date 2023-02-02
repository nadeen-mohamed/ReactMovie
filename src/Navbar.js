import { Link } from "react-router-dom";
import './Navbar.css';
import { LANGCONTEXT } from './Context/Context';
import { useContext } from "react";
import { useSelector,useDispatch } from "react-redux";
import logo from './download.jpg'
function Navbar(){
    const {Context, setContext} = useContext(LANGCONTEXT)
  const data = useSelector((state)=>state.CartReducer.counter) 
    return(
        <>
            <nav className="navbar " dir={Context === "Ar" ? "rtl" : "ltr"}>
    <div className="container-fluid">
 
        
                   <Link className="navbar-brand " id="h" to={"/"}><img src={logo} 
                    class="logo" /></Link> 
            <Link className="navbar-brand " id="h" to={"/movies"}>Movies</Link>
            <Link className="nav-link " id="h" to="/addtofav">fav {data}</Link>
            <Link className="navbar-brand" id="h" to="/login">Login</Link>
    
      <Link className="navbar-brand" id="h" to="/reg">Registrion</Link>
      <Link  id="h" onClick={() => setContext(Context == "Ar" ? "En" : "Ar")} className="navbar-brand">{Context}</Link>
          
     
   
        
     
    </div>
    </nav>
    </>

    )
}

export default Navbar;