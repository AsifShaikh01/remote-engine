import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "../styles/Home.module.css"

const Home = () => {
    const navigate = useNavigate();

    const handleClickclient = () =>{
        navigate("/client/register")
    }
    const handleClickdeveloper = () =>{
        navigate("/developer/register")
    }
  return (
    <div className={styles.home}>
      <div>
        <p>Are you Client?</p>
        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="" />
        <button onClick={handleClickclient}>Click here to Signup</button>
        <p>Already have an acoount?Click here to <Link style={{color:"black",textDecoration:"none",fontSize:"14px"}} to="/client/login">LOGIN</Link></p>
      </div>
      <div>
        <p>Are you Developer?</p>
        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="" />
        <button onClick={handleClickdeveloper}>Click here to Signup</button>
        <p>Already have an acoount?Click here to <Link style={{color:"black",textDecoration:"none",fontSize:"14px"}} to="/developer/login">LOGIN</Link></p>
      </div>
    </div>
  )
}

export default Home
