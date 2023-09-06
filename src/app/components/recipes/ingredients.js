'use client'

import { useEffect, useState } from 'react'
import styles from './ingredients.module.css' 
import IngredientItem from './ingredientitem'
import ImgOpt from './ingredientitemopt'

export default function Ingredients(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        {
            props.ingredients.map((ingredient, index) => {
              return (
                <IngredientItem key={index} ingredients={ingredient}/>
              );
            })
        }
        <ImgOpt/>
      </div>
    </div>
  )
}
