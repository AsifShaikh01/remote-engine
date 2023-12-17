import React, { useState } from 'react'
import styles from "../styles/Registration.module.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClientRegistration = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://wild-rose-chick-gown.cyclic.app/client/register', {
            name,
            email,
            password,
          });
          if (response.data.message === 'Email already registered') {
            setErrorMessage('Email already registered');
            alert("Email alraedy registered!")
          } else {
            console.log('Signup Successful!', response.data);
            alert('Signup Successful!');
            navigate('/client/login'); // Redirect to login page on successful signup
          }
        } catch (error) {
          console.error('Signup Failed!', error.response.data);
          setErrorMessage(error.response.data.message)
        }
        setName('');
        setEmail('');
        setPassword('');
      };
  return (
       <div className={styles.bodyAll}>
        <div className={styles.home}>
            
      <div className={styles.imageDiv}>
      <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="" />
      </div>
      <div >
      <h1>CLIENT SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">SIGNUP</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p>Already registered?Click here to <Link to="/client/login">Login</Link></p>
           
      </div>
      
    </div>
    </div>
      
    
  )
}

export default ClientRegistration
