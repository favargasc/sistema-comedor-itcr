'use client'

import { useState } from 'react'
import styles from './meals.module.css'
import Item from './item'

export default function Meals(props) {
  return (
    <div className={styles.wrapper}>
      {
        props.recipes.map((recipe, index) => {
          return (
            <Item key={index} recipe={recipe} id={index} setRecipe={props.setRecipe}/>
          );
        })
      }
    </div>
  )
}
