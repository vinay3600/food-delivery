import React, { useEffect, useState,useContext } from 'react'
import { assets } from '../../assets/assets';
import './LoginPopUp.css'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios'
const LoginPopUp = ({ setShowlogin }) => {
    const {url,setToken} = useContext(StoreContext);
    const [currState, setCurrState] = useState("Sign Up");
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChaneHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) =>{
        event.preventDefault();

        let newUrl = url;
        if(currState === "Login"){
            newUrl +="/api/user/login"
        }
        else{
            newUrl +="/api/user/register"
        }

        const response = await axios.post(newUrl,data)

        if(response.data.seccess){
             setToken(response.data.token);
             localStorage.setItem("token",response.data.token)
             setShowlogin(false);
        }
        else{
            alert(response.data.message);
        }
    }

    useEffect(()=>{
        console.log(data);
    },[data])
    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login"?<></>:<input type="text" name='name' value={data.name} onChange={onChaneHandler} placeholder='Your Name' required />}
                    <input name='email' onChange={onChaneHandler} value={data.email} type="email" placeholder='Your Email' required />
                    <input name='password' onChange={onChaneHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By Continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopUp