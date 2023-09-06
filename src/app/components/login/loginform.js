'use client'

import LoginField from './loginfield';
import styles from './loginform.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function LoginForm(props) {  
  const [isValidLogin, setIsValidLogin] = useState(true)
  const [user, setUser] = useState({})

  const router = useRouter()

  useEffect(() => {
    fetch('http://localhost:3000/api/user')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();

    (user.username == formData.username && user.password == formData.password) ? router.push('/recipes', { scroll: false }) : setIsValidLogin(false)
  };

  const [formData, setFormData] = useState({
    username: '',
    password: ''
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
        <span className={styles['main-msj']}>Bienvenido de vuelta</span>
        <span className={styles['second-msj']}>Por favor ingresa tus datos</span>
        <LoginField state={isValidLogin} field='username' name={'Usuario'} placeholder='Ingrese su usuario' type='text' value={formData.username} method={handleInputChange}/>
        <LoginField state={isValidLogin} field='password' name={'Constraseña'}  type="password" value={formData.password} method={handleInputChange}/>
        <button className={styles['login-btn']} type='submit' >Iniciar sesión</button>
      </form>
    </div>
  )
}