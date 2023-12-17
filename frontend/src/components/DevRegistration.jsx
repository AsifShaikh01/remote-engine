import React, { useState } from 'react'
import styles from "../styles/Registration.module.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DevRegistration = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://wild-rose-chick-gown.cyclic.app/developer/register', {
            name,
            email,
            password
       
          
          });
          if (response.data.message === 'Email already registered') {
         
            alert("Email alraedy registered!")
          } else {
            console.log('Signup Successful!', response.data);
            alert('Signup Successful!');
            navigate('/developer/login'); // Redirect to login page on successful signup
          }
        } catch (error) {
          console.error('Signup Failed!', error.res.data);

        }
      };
  return (
    <div className={styles.bodyAll}>
    <div className={styles.home}>
        
  <div className={styles.imageDiv}>
  <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="" />
  </div>
  
    <div>
       <h1>DEVELOPER SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">SIGNUP</button>
      </form>
      <p>Already registered?Click here to <Link to="/developer/login">Login</Link></p>
    </div>
    </div>
    </div>
  )
}

export default DevRegistration
