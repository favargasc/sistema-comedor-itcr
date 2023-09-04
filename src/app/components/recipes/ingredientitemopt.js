'use client'

import { useState } from 'react'
import styles from './ingredientitemopt.module.css'

export default function IngOpt() {
  return (
    <div className={styles['opt-module']}>
      <button className={styles.btn}>Agregar</button>
      <button className={styles.btn}>Eliminar</button>
      <button className={styles.btn}>Modificar</button>
    </div>
  )
}