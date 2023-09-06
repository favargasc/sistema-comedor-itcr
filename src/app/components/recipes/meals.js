'use client'
import { ReactSmartScroller } from 'react-smart-scroller'
import { useState } from 'react'
import styles from './meals.module.css'
import Item from './item'

export default function Meals(props) {
  return (
    <div className={styles.wrapper}>
      <ReactSmartScroller numCols={5}>
      {
        props.recipes
        .filter((recipe) => recipe.name.toUpperCase().includes(props.search.toUpperCase()))
        .map((recipe, index) => {
          return (
            <Item key={index} recipe={recipe} id={index} setRecipe={props.setRecipe}/>
          );
        })
      }
      </ReactSmartScroller>
    </div>
  )
}
