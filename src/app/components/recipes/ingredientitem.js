'use client'

import { useState } from 'react'
import styles from './ingredientitem.module.css'

export default function IngredientItem(props) {

  return (
    <div className={styles.item}>
      <input className={styles.checkbox} type="checkbox" checked={props.ingredients.isSelected} id={props.ingredients.id} name={props.ingredients.product_description} />
      <span contentEditable="true">{props.ingredients.product_description}</span>
    </div>
  )
}