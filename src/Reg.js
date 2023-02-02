import React, { useState } from 'react';
import "./LoginForm.css"
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validpassword= RegExp(/^((?=.*[A-Z])(?=.*@).{8,99})$/i)

 
 
function RegsForm() {

    

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password:"",
        confirmPassword: "",
         username:""
    })

    const [error, setErros] = useState({
        name: null,
        email: null,
        password:null,
        confirmPassword: null,
        username:null
    })

    const changeUserData = (e) => {

    
        if (e.target.name == "name") {
            setUserData({
                ...userData,
                name: e.target.value
            })

            setErros({
                ...error,
                name: e.target.value.length == 0 ? "This Field is Required" : e.target. value.length < 3
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
                email: e.target.value.length == 0 ? "This Field is Required" :validEmailRegex.test(e.target.value)
             
                ? ''
                : 'Email is not valid!'
            })
        }
        else if  (e.target.name == "username"){
            setUserData({
                ...userData,
                username: e.target.value
            })

            setErros({
                ...error,
                username: e.target.value.length == 0 ? "This Field is Required" :e.target.value.length <5? "This Field is mustbe 5char" :''
            })
        }
        
       else if   (e.target.name == "password") {
            setUserData({
                ...userData,
                password: e.target.value
            })

            setErros({
                ...error,
                
                password: e.target.password !==  e.target.confirmPassword  ? "must be same" : validpassword.test(e.target.value)
                ? ''
                : 'Password must contain at least one number, @, one uppercase and a lowercase letter and at least 8 characters'
            
            })
        }else{
            setUserData({
                ...userData,
                confirmPassword: e.target.value
            })
            setErros({
                ...error,
                
                confirmPassword: e.target.value!== userData.password  ? " confirmPassword must be same to Password" :null
            
            })
        }
       
    }
    
    const submitData = (e) => {
        e.preventDefault()
    }
    const togglePassword =()=>{
        if(userData==="password")
        {
            setUserData("text")
         return;
        }
        setUserData("password")
      }
  
   

    return (
      < >
      <h2>Register form </h2>
    

<form onSubmit={(e) => submitData(e)} method="get">
 

  <div class="container">
    <label for="name"  className="label"><b>Name</b></label>
    <input name="name" type="text"
                className={`form-control ${error.name && "border-danger"}`}
                value={userData.name} onChange={(e) => changeUserData(e)}  />

                <p className="text-danger">  {error.name}  </p>

    <label for="email"  className="label"><b>Email</b></label>
    <input name="useremail" type="email" className={`form-control ${error.email && "border-danger"}`} value={userData.email} onChange={(e) => changeUserData(e)}/>

<p className="text-danger"> {error.email} </p>
 <label for="username"  className="label"><b>Username</b></label>
    <input name="username" type="text" className={`form-control ${error.username && "border-danger"}`} value={userData.username} onChange={(e) => changeUserData(e)}/>

<p className="text-danger"> {error.username} </p> 
        
        
        <label for="cp"  className="label"><b>Password</b></label>
<div className="row">
            <div className="col-sm-12">
                <div className="input-group">
                    <input  name="password" type={userData} onChange={(e) => changeUserData(e)}  value={userData.password}  class="form-control"/>
                    <div className="input-group-btn ">
                    <span class="input-group-text"  > <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { userData==="password"? <i class="fa-regular fa-eye-slash"></i> :<i class="fa-solid fa-eye"></i> }
                     </button></span>
                                      
                    </div>
                </div>
                
            </div>
            <p className="text-danger"> {error.password} </p> 
      </div>

      <label for="confirmPassword"  className="label"><b>confirmPassword</b></label>
<div className="row">
            <div className="col-sm-12">
                <div className="input-group">
                    <input  name="confirmPassword" type={userData} onChange={(e) => changeUserData(e)}  value={userData.confirmPassword}  class="form-control"/>
                    <div className="input-group-btn ">
                   
                                      
                    </div>
                </div>
                
            </div>
            <p className="text-danger"> {error.confirmPassword} </p> 
      </div>




     
{/* <label for="cp"><b>confirmPassword</b></label>

    <input name="confirmPassword" className={`form-control ${error.confirmPassword && "border-danger"}`} value={userData.confirmPassword} onChange={(e) => changeUserData(e)} 
   />
         

<p className="text-danger"> {error.confirmPassword} </p> */}

        
    <button type="submit"  disabled = {error.password||error.email||error.username} >Login</button>
    
  </div>

  
</form>

      </>

    )

}

export default RegsForm

 