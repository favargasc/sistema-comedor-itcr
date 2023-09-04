'use client'

import styles from './options.module.css'

export default function Options() {
  return (
    <div className={styles.wrapper}>
      <button className={styles['add-btn']}>Agregar</button>
      <input className={styles['search-bar']}/>

      <div className={styles.times}>
        <button className={styles.btn}>Desayuno</button>
        <button className={styles.btn}>Almuerzo</button>
        <button className={styles.btn}>Café</button>
        <button className={styles.btn}>Cena</button>
      </div>
    </div>
  )
}
