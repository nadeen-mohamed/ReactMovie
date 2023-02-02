import { useState } from "react"
import "./LoginForm.css"
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

function LoginForm() {

   

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password:""
    })

    const [error, setErros] = useState({
        username: null,
        email: null,
        password:null,
    })

    const changeUserData = (e) => {

    
        if (e.target.name == "username") {
            setUserData({
                ...userData,
                name: e.target.value
            })

            setErros({
                ...error,
                username: e.target. value.length < 3
                ? 'Full Name must be at least 3 characters long!'
                : ''
            
            })
        }
        else if  (e.target.name == "useremail"){
            setUserData({
                ...userData,
                email: e.target.value
            })

            setErros({
                ...error,
                email: validEmailRegex.test(e.target.value)
                ? ''
                : 'Email is not valid!'
            })
        }
       else {
            setUserData({
                ...userData,
                password: e.target.value
            })

            setErros({
                ...error,
                password: e.target. value.length < 8
                ? 'Password must be at least 8 characters long!'
                : ''
            })
        }

    }

    const submitData = (e) => {
        e.preventDefault()
    }


    return (
      < >
      <h2 >Login </h2>
    

<form onSubmit={(e) => submitData(e)} method="post">
 

  <div class="container">
    <label for="uname" className="label"><b>Username</b></label>
    <input name="username" type="text"
                className={`form-control ${error.username && "border-danger"}`}
                value={userData.name} onChange={(e) => changeUserData(e)}  />

                <p className="text-danger">  {error.username}  </p>

    <label for="email" className="label"><b>Email</b></label>
    <input type="email" name="useremail" className={`form-control ${error.email && "border-danger"}`} value={userData.email} onChange={(e) => changeUserData(e)}/>

<p className="text-danger"> {error.email} </p>

        
<label for="pass" className="label"><b>Password</b></label>
    <input type="password" name="password" className={`form-control ${error.password && "border-danger"}`} value={userData.password} onChange={(e) => changeUserData(e)}/>

<p className="text-danger"> {error.password} </p>

        
    <button type="submit"  disabled = {error.password||error.email||error.username} >Login</button>
    
  </div>

  
</form>

      </>

    )

}

export default LoginForm