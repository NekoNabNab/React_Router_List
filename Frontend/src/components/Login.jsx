import React from 'react'
import { NavLink } from "react-router-dom";
import "../css/Login.css"
// import logo from '../img/nekofeWhite.svg'

const Login = () => {
  return (
    <body>
        <div className="wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 side-image">
                        {/* <img className="logo" src={logo} alt=""/> */}
                    </div>
                    <div className="col-md-6 right">
                        <form className="input-box" action="">
                            <header>Login</header>
                            <div className="input-field">
                                <input type="email" className="input" placeholder="email"  id="email" required autocomplete="off"/>
                            </div>

                            <div className="input-field">
                                <input type="password" className="input" placeholder="password" id="password" required autocomplete="off"/>
                            </div>
                            <div className="input-field">
                                <li><NavLink to="/dashboard" ><input type="submit" className="submit"  value="Submit"/></NavLink></li>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
    </body>
  )
}

export default Login