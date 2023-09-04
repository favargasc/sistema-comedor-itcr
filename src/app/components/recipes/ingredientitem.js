'use client'

import { useState } from 'react'
import styles from './ingredientitem.module.css'

export default function IngredientItem(props) {
  return (
    <div className={styles.item}>
      <input className={styles.checkbox} type="checkbox" id="horns" name="horns" />
      <span contentEditable="true">{props.ingredients.product_description}</span>
    </div>
  )
}