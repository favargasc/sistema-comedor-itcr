import data from '../../db/recipes.json'
import fs from 'fs'

import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(data)
}

export async function POST(request) {
  const { name, path } = await request.json()

  const data = await fs.promises.readFile('C:/Users/Fabian/Desktop/sistema-comedor-itcr/src/app/db/recipes.json');

  const file = JSON.parse(data);

  file.push(  {
    id: 5,
    name: name,
    path: path,
    ingredients: [],
    times: [
      {
        id: 1,
        name: "desayuno",
        state: false
      },
      {
        id: 2,
        name: "almuerzo",
        state: true
      },
      {
        id: 3,
        name: "café",
        state: true
      },
      {
        id: 4,
        name: "cena",
        state: false
      }
    ]
  },)

  fs.promises.writeFile('C:/Users/Fabian/Desktop/sistema-comedor-itcr/src/app/db/recipes.json', JSON.stringify(file))
  .then(() => {
    console.log('Archivo actualizado con éxito');
  })
  .catch(error => {
    console.error('Error al escribir el archivo:', error);
  });

  return NextResponse.json({res: 'OK'})

}
