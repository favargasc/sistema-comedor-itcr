'use client'

import { useState } from 'react'
import styles from './item.module.css'

export default function Item(props) {
  return (
    <div className={styles.wrapper} onClick={() => props.setRecipe(props.recipe)}>
      <div className={styles.img} />
      <span className={styles.title}>
        {props.recipe.name}
      </span>
    </div>
  )
}
