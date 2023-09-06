import { NextResponse } from 'next/server'
import fs from 'fs'

export async function GET() {
  return NextResponse.json({msg: "holamundo"})
}
 
// dos formas parametros | bodys

export async function PUT(request) {
  const { idRecipe, idIngredient, product_description } = await request.json()

  const data = await fs.promises.readFile('C:/Users/Fabian/Desktop/sistema-comedor-itcr/src/app/db/recipes.json');

  const file = JSON.parse(data);
  
  file[idRecipe].ingredients[idIngredient].product_description = product_description


  fs.promises.writeFile('C:/Users/Fabian/Desktop/sistema-comedor-itcr/src/app/db/recipes.json', JSON.stringify(file, null, 2))
  .then(() => {
    console.log('Archivo actualizado con éxito');
  })
  .catch(error => {
    console.error('Error al escribir el archivo:', error);
  });


  return NextResponse.json({res: "OK"})
}