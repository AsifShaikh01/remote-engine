import React, { useState } from 'react'
import styles from "../styles/Registration.module.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClientLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

          const response = await axios.post('https://wild-rose-chick-gown.cyclic.app/client/login', {
            email,
            password,
          });
          console.log('Login Successful!', response.data);
    
          alert('Login Successful!');
          localStorage.setItem('token', response.data.token);
        
        
        } catch (error) {
          console.error('Login Failed!', error.response.data);
    
          alert('Wrong credentials!');
        }
      };
  return (
    <div className={styles.bodyAll}>
    <div className={styles.home}>
        
  <div className={styles.imageDiv}>
  <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="" />
  </div>
  
    <div>
       <h1>CLIENT LOGIN</h1>
      <form onSubmit={handleSubmit}>
        
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
       
        <button type="submit">LOGIN</button>
      </form>
      <p>Don't have an account?Click here to <Link to="/client/register">Signup</Link></p>
    </div>
    </div>
    </div>
  )
}

export default ClientLogin
