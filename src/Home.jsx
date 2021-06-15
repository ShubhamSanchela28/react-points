import React from "react"
import { useState } from "react";
import { isLogin, logout } from "./utils"
import { Link } from 'react-router-dom';
const Home = () => {
    const [state, setState] = useState(isLogin)
    const handleLogout = () => {
        logout()
        setState({ isLogin: false })
        console.log("logout works");
    }
    return (
        <>
            <h1>Home</h1>
            {isLogin ? <button onClick={handleLogout} >Logout</button> : <Link to="/signin">Go to Sign-In</Link>}
        </>
    )
}
export default Home;