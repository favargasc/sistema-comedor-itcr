'use client'

import LoginField from './loginfield';
import styles from './loginform.module.css'
import { useState, useEffect } from 'react';

export default function LoginForm(props) {  
  const [isValidLogin, setIsValidLogin] = useState(true)
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/api/user')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();

    (formData.Username !== user.username || formData.Password !== user.password) ? setIsValidLogin(false) : props.method("Hello world!")
  };

  const [formData, setFormData] = useState({
    Username: '',
    Password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    setIsValidLogin(true)
  };

  return (
    <div className={styles.item}>
      <form onSubmit={handleSubmit}>
        <span className={styles['main-msj']}>Welcome back</span>
        <span className={styles['second-msj']}>Please enter your details</span>
        <LoginField state={isValidLogin} field='Username' placeholder='Enter your email' type='text' value={formData.username} method={handleInputChange}/>
        <LoginField state={isValidLogin} field='Password' type="password" value={formData.password} method={handleInputChange}/>
        <button className={styles['login-btn']} type='submit' >Sign in</button>
      </form>
    </div>
  )
}