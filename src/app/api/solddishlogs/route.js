//--------------------------------------------------------------------------------------------------------------
//  CREATE
//--------------------------------------------------------------------------------------------------------------
// Importa el modelo SoldDishLog, SaleLog, Dish y PrismaClient
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Operación CRUD Create para SoldDishLog
export async function POST(req) {
  try {
    const { sale_id, dish_id, sold_dishes } = req.body;  // Asumiendo que los datos necesarios se envían en el cuerpo de la solicitud

    // Crear un nuevo registro de SoldDishLog
    const newSoldDishLog = await prisma.soldDishLog.create({
      data: {
        sale_id,
        dish_id,
        sold_dishes,
      },
    });

    return NextResponse.json(newSoldDishLog);
  } catch (error) {
    console.error('Error creating SoldDishLog:', error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Manejar errores específicos de Prisma
      return NextResponse.error('Prisma Error: ' + error.message, 500);
    } else {
      // Otros errores
      return NextResponse.error('Internal Server Error', 500);
    }
  } finally {
    await prisma.$disconnect();
  }
}


//--------------------------------------------------------------------------------------------------------------
//  Prueba CREATE
//--------------------------------------------------------------------------------------------------------------

// Prueba para la operación CREATE de SoldDishLog
async function testCreateSoldDishLog() {
    try {
      // Ajusta los datos según el nuevo registro de SoldDishLog que deseas crear
      const testReq = {
        body: {
          sale_id: 4,
          dish_id: 2,
          sold_dishes: 3,
        },
      };
  
      const result = await POST(testReq);
      console.log('Resultado de la prueba CREATE (SoldDishLog):', result);
    } catch (error) {
      console.error('Error en la prueba CREATE (SoldDishLog):', error);
    }
  }
  
  // Llama a la función para probar la operación CREATE (SoldDishLog) al cargar el archivo (solo para propósitos de prueba)
  //testCreateSoldDishLog();
//--------------------------------------------------------------------------------------------------------------
//  DELETE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Delete para SoldDishLog
export async function DELETE(req) {
  try {
    const { sold_dish_log_id } = req.body;  // Asumiendo que sold_dish_log_id se envía en el cuerpo de la solicitud

    // Eliminar el registro de SoldDishLog por ID
    const deletedSoldDishLog = await prisma.soldDishLog.delete({
      where: {
        sold_dish_log_id,
      },
    });

    return NextResponse.json(deletedSoldDishLog);
  } catch (error) {
    console.error('Error deleting SoldDishLog:', error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Manejar errores específicos de Prisma
      return NextResponse.error('Prisma Error: ' + error.message, 500);
    } else {
      // Otros errores
      return NextResponse.error('Internal Server Error', 500);
    }
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba DELETE
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación DELETE de SoldDishLog
async function testDeleteSoldDishLog() {
    try {
      // Ajusta el sold_dish_log_id según el registro de SoldDishLog que deseas eliminar
      const testReq = {
        body: {
          sold_dish_log_id: 1,
        },
      };
  
      const result = await DELETE(testReq);
      console.log('Resultado de la prueba DELETE (SoldDishLog):', result);
    } catch (error) {
      console.error('Error en la prueba DELETE (SoldDishLog):', error);
    }
  }
  
  // Llama a la función para probar la operación DELETE (SoldDishLog) al cargar el archivo (solo para propósitos de prueba)
  //testDeleteSoldDishLog();
//--------------------------------------------------------------------------------------------------------------
//  UPDATE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Update para SoldDishLog
export async function PUT(req) {
  try {
    const { sold_dish_log_id, sale_id, dish_id, sold_dishes } = req.body;  // Asumiendo que sold_dish_log_id y los datos a actualizar se envían en el cuerpo de la solicitud

    // Actualizar el registro de SoldDishLog por ID
    const updatedSoldDishLog = await prisma.soldDishLog.update({
      where: {
        sold_dish_log_id,
      },
      data: {
        sale_id,
        dish_id,
        sold_dishes,
      },
    });

    return NextResponse.json(updatedSoldDishLog);
  } catch (error) {
    console.error('Error updating SoldDishLog:', error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Manejar errores específicos de Prisma
      return NextResponse.error('Prisma Error: ' + error.message, 500);
    } else {
      // Otros errores
      return NextResponse.error('Internal Server Error', 500);
    }
  } finally {
    await prisma.$disconnect();
  }
}
//--------------------------------------------------------------------------------------------------------------
//  Prueba UPDATE
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación UPDATE de SoldDishLog
async function testUpdateSoldDishLog() {
    try {
      // Ajusta sold_dish_log_id y los datos a actualizar según el registro de SoldDishLog que deseas modificar
      const testReq = {
        body: {
          sold_dish_log_id: 2,
          sale_id: 4,
          dish_id: 2,
          sold_dishes: 500,
        },
      };
  
      const result = await PUT(testReq);
      console.log('Resultado de la prueba UPDATE (SoldDishLog):', result);
    } catch (error) {
      console.error('Error en la prueba UPDATE (SoldDishLog):', error);
    }
  }
  
  // Llama a la función para probar la operación UPDATE (SoldDishLog) al cargar el archivo (solo para propósitos de prueba)
  testUpdateSoldDishLog();
//--------------------------------------------------------------------------------------------------------------
//  GET
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Get para SoldDishLog
export async function GET() {
  try {
    // Obtener todos los registros de SoldDishLog
    const soldDishLogs = await prisma.soldDishLog.findMany();
    return NextResponse.json(soldDishLogs);
  } catch (error) {
    console.error('Error fetching SoldDishLogs:', error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Manejar errores específicos de Prisma
      return NextResponse.error('Prisma Error: ' + error.message, 500);
    } else {
      // Otros errores
      return NextResponse.error('Internal Server Error', 500);
    }
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba GET
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación GET de SoldDishLog
async function testGetSoldDishLogs() {
    try {
      const result = await GET();
      console.log('Resultado de la prueba GET (SoldDishLogs):', result);
    } catch (error) {
      console.error('Error en la prueba GET (SoldDishLogs):', error);
    }
  }
  
  // Llama a la función para probar la operación GET (SoldDishLogs) al cargar el archivo (solo para propósitos de prueba)
  testGetSoldDishLogs();