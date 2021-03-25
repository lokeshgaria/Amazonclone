import React from 'react'
import { NavLink } from 'react-router-dom'
import './Login.css';
function Login() {
    return (
        <div className="body">
          <div className="children">
          <div>
                <NavLink to="/">  <img src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" /></NavLink>
                
            </div> 
            <div className="form">
                <h3 className="childern__title">Sign-in</h3>
         
                 <strong className="login_title">Email or mobile phone number</strong>
                 <div className="login__input">
                     <input className="login_input" type="text"/>
                     <input className="login_button" type="button" value="Continue"/>
                     <small>By continuing, you agree to Amazon's <span className="conditions">Conditions of span Use</span>  and <span className="conditions">Privacy Notice</span> .</small>
                 </div>
            </div>
          </div>
           
        </div>

    )
}

export default Login
