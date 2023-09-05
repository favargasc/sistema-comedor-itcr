'use client'

import styles from '../components/recipes/recipes.module.css'
import Meals from '../components/recipes/meals'
import Ingredients from '../components/recipes/ingredients'
import Options from '../components/recipes/options'
import { useState, useEffect } from 'react'

export default function Recipes() {
  const [recipes, setRecipes] = useState([])
  const [title, setCurrentTitle] = useState([])
  const [currentRecipe, setCurrentRecipe] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/recipe')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])

  return (
    <main className={styles.wrapper}>
      <span className={styles.title}>Ingredientes / {currentRecipe.name}</span>
      <Meals recipes={recipes} setRecipe={setCurrentRecipe}/>
      <Options times={currentRecipe.times || []}/>
      <Ingredients ingredients={currentRecipe.ingredients || []}/>
    </main>
  )
}
