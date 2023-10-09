//--------------------------------------------------------------------------------------------------------------
//  CREATE
//--------------------------------------------------------------------------------------------------------------
// Importa el modelo Dish y PrismaClient
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Operación CRUD Create para Dish
export async function POST(req) {
  try {
    const { name, internal_price, foreign_price, is_favorite, img_path } = req.body;  // Asumiendo que los datos necesarios se envían en el cuerpo de la solicitud

    // Crear un nuevo plato
    const newDish = await prisma.dish.create({
      data: {
        name,
        internal_price,
        foreign_price,
        is_favorite,
        img_path,
      },
    });

    return NextResponse.json(newDish);
  } catch (error) {
    console.error('Error creating Dish:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba CREATE
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación CREATE de Dish
async function testCreateDish() {
    try {
      // Ajusta los datos según el nuevo plato que deseas crear
      const testReq = {
        body: {
          name: 'Nuevo Plato',
          internal_price: 10.99,
          foreign_price: 12.99,
          is_favorite: true,
          img_path: '/images/nuevo_plato.jpg',
        },
      };
  
      const result = await POST(testReq);
      console.log('Resultado de la prueba CREATE (Dish):', result);
    } catch (error) {
      console.error('Error en la prueba CREATE (Dish):', error);
    }
  }
  
  // Llama a la función para probar la operación CREATE (Dish) al cargar el archivo (solo para propósitos de prueba)
  //testCreateDish();
  
//--------------------------------------------------------------------------------------------------------------
//  DELETE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Delete para Dish
export async function DELETE(req) {
  try {
    const { dish_id } = req.body;  // Asumiendo que dish_id se envía en el cuerpo de la solicitud

    // Eliminar el plato por ID
    const deletedDish = await prisma.dish.delete({
      where: {
        dish_id,
      },
    });

    return NextResponse.json(deletedDish);
  } catch (error) {
    console.error('Error deleting Dish:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba DELETE
//--------------------------------------------------------------------------------------------------------------

// Prueba para la operación DELETE de Dish
async function testDeleteDish() {
    try {
      // Ajusta el dish_id según el plato que deseas eliminar
      const testReq = {
        body: {
          dish_id: 1,
        },
      };
  
      const result = await DELETE(testReq);
      console.log('Resultado de la prueba DELETE (Dish):', result);
    } catch (error) {
      console.error('Error en la prueba DELETE (Dish):', error);
    }
  }
  
  // Llama a la función para probar la operación DELETE (Dish) al cargar el archivo (solo para propósitos de prueba)
  //testDeleteDish();
  
//--------------------------------------------------------------------------------------------------------------
//  UPDATE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Update para Dish
export async function PUT(req) {
  try {
    const { dish_id, name, internal_price, foreign_price, is_favorite, img_path } = req.body;  // Asumiendo que dish_id y los datos a actualizar se envían en el cuerpo de la solicitud

    // Actualizar el plato por ID
    const updatedDish = await prisma.dish.update({
      where: {
        dish_id,
      },
      data: {
        name,
        internal_price,
        foreign_price,
        is_favorite,
        img_path,
      },
    });

    return NextResponse.json(updatedDish);
  } catch (error) {
    console.error('Error updating Dish:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}


//--------------------------------------------------------------------------------------------------------------
//  Prueba UPDATE
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación UPDATE de Dish
async function testUpdateDish() {
    try {
      // Ajusta dish_id y los datos a actualizar según el plato que deseas modificar
      const testReq = {
        body: {
          dish_id: 2,
          name: 'Plato Actualizado',
          internal_price: 12.99,
          foreign_price: 14.99,
          is_favorite: false,
          img_path: '/images/plato_actualizado.jpg',
        },
      };
  
      const result = await PUT(testReq);
      console.log('Resultado de la prueba UPDATE (Dish):', result);
    } catch (error) {
      console.error('Error en la prueba UPDATE (Dish):', error);
    }
  }
  
  // Llama a la función para probar la operación UPDATE (Dish) al cargar el archivo (solo para propósitos de prueba)
  testUpdateDish();
  
//--------------------------------------------------------------------------------------------------------------
//  GET
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Get para Dish
export async function GET() {
  try {
    // Obtener todos los platos
    const dishes = await prisma.dish.findMany();
    return NextResponse.json(dishes);
  } catch (error) {
    console.error('Error fetching Dishes:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}


//--------------------------------------------------------------------------------------------------------------
//  Prueba GET
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación GET de Dish
async function testGetDishes() {
    try {
      const result = await GET();
      console.log('Resultado de la prueba GET (Dishes):', result);
    } catch (error) {
      console.error('Error en la prueba GET (Dishes):', error);
    }
  }
  
  // Llama a la función para probar la operación GET (Dishes) al cargar el archivo (solo para propósitos de prueba)
  testGetDishes();
  