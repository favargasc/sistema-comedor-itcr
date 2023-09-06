'use client'

import { useState } from 'react'
import styles from './ingredientitem.module.css'

export default function IngredientItem(props) {
  const handleContentChange = async(event) => {
    event.preventDefault();

    const data = {
      idRecipe: props.currentRecipe.id,
      idIngredient: props.ingredients.id,
      product_description: event.target.textContent
    }

    try {      
      const response = await fetch('http://localhost:3000/api/ingredient', {
        method: "PUT",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
    window.location.reload(false);
  };


  return (
    <div className={styles.item}>
      <input className={styles.checkbox} type="checkbox" checked={props.ingredients.isSelected} id={props.ingredients.id} name={props.ingredients.product_description} />
      <span
        contentEditable="true"
        onBlur={handleContentChange}
      >
        {props.ingredients.product_description}
      </span>
    </div>
  )
}