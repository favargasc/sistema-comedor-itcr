'use client'

import { useState } from 'react'
import styles from './ingredientitemopt.module.css'

export default function IngOpt() {
  const addIngredient = () => {
    fetch('http://localhost:3000/api/recipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          nombre: 'Ejemplo',
          email: 'ejemplo@email.com',
        }),
    })
    .then(data => {
      console.log('Respuesta del servidor:', data);
    }) 
  }
  
  return (
    <div className={styles['opt-module']}>
      <button className={styles['btn-add']}>Agregar</button>
      <button className={styles['btn-modify']}>Modificar</button>
      <button className={styles['btn-delete']}>Eliminar</button>
    </div>
  )
}