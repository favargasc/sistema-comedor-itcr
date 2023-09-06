'use client'
import Image from 'next/image'
import { useState } from 'react'
import styles from './item.module.css'

export default function Item(props) {
  return (
    <div className={styles.wrapper} onClick={() => props.setRecipe(props.recipe)}>
      <Image
        src={props.recipe.path} 
        width={100}
        height={100}
        alt='comida'
        className={styles.img} />
      <span className={styles.title}>
        {props.recipe.name}
      </span>
    </div>
  )
}
