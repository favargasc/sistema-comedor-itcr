//--------------------------------------------------------------------------------------------------------------
//  CREATE
//--------------------------------------------------------------------------------------------------------------
// Importa el modelo SaleLog, User y PrismaClient
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Operación CRUD Create para SaleLog
export async function POST(req) {
  try {
    const { user_id, total } = req.body;  // Asumiendo que los datos necesarios se envían en el cuerpo de la solicitud

    // Crear un nuevo registro de SaleLog
    const newSaleLog = await prisma.saleLog.create({
      data: {
        user_id,
        total,
      },
    });

    return NextResponse.json(newSaleLog);
  } catch (error) {
    console.error('Error creating SaleLog:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba CREATE
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación CREATE de SaleLog
async function testCreateSaleLog() {
    try {
      // Ajusta los datos según la nueva entrada de SaleLog que deseas crear
      const testReq = {
        body: {
          user_id: 7,
          total: 50,
        },
      };
  
      const result = await POST(testReq);
      console.log('Resultado de la prueba CREATE (SaleLog):', result);
    } catch (error) {
      console.error('Error en la prueba CREATE (SaleLog):', error);
    }
  }
  
  // Llama a la función para probar la operación CREATE (SaleLog) al cargar el archivo (solo para propósitos de prueba)
  //testCreateSaleLog();
//--------------------------------------------------------------------------------------------------------------
//  DELETE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Delete para SaleLog
export async function DELETE(req) {
  try {
    const { sale_id } = req.body;  // Asumiendo que sale_id se envía en el cuerpo de la solicitud

    // Eliminar el registro de SaleLog por ID
    const deletedSaleLog = await prisma.saleLog.delete({
      where: {
        sale_id,
      },
    });

    return NextResponse.json(deletedSaleLog);
  } catch (error) {
    console.error('Error deleting SaleLog:', error);

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
// Prueba para la operación DELETE de SaleLog
async function testDeleteSaleLog() {
    try {
      // Ajusta el sale_id según el registro de SaleLog que deseas eliminar
      const testReq = {
        body: {
          sale_id: 3,
        },
      };
  
      const result = await DELETE(testReq);
      console.log('Resultado de la prueba DELETE (SaleLog):', result);
    } catch (error) {
      console.error('Error en la prueba DELETE (SaleLog):', error);
    }
  }
  
  // Llama a la función para probar la operación DELETE (SaleLog) al cargar el archivo (solo para propósitos de prueba)
  //testDeleteSaleLog();
  
//--------------------------------------------------------------------------------------------------------------
//  UPDATE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Update para SaleLog
export async function PUT(req) {
  try {
    const { sale_id, user_id, total } = req.body;  // Asumiendo que sale_id y los datos a actualizar se envían en el cuerpo de la solicitud

    // Actualizar el registro de SaleLog por ID
    const updatedSaleLog = await prisma.saleLog.update({
      where: {
        sale_id,
      },
      data: {
        user_id,
        total,
      },
    });

    return NextResponse.json(updatedSaleLog);
  } catch (error) {
    console.error('Error updating SaleLog:', error);

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
// Prueba para la operación UPDATE de SaleLog
async function testUpdateSaleLog() {
    try {
      // Ajusta sale_id y los datos a actualizar según el registro de SaleLog que deseas modificar
      const testReq = {
        body: {
          sale_id: 4,
          user_id: 7,
          total: 75,
        },
      };
  
      const result = await PUT(testReq);
      console.log('Resultado de la prueba UPDATE (SaleLog):', result);
    } catch (error) {
      console.error('Error en la prueba UPDATE (SaleLog):', error);
    }
  }
  
  // Llama a la función para probar la operación UPDATE (SaleLog) al cargar el archivo (solo para propósitos de prueba)
  //testUpdateSaleLog();
  
//--------------------------------------------------------------------------------------------------------------
//  GET
//--------------------------------------------------------------------------------------------------------------
// Operación CRUD Get para SaleLog
export async function GET() {
  try {
    // Obtener todos los registros de SaleLog
    const saleLogs = await prisma.saleLog.findMany();
    return NextResponse.json(saleLogs);
  } catch (error) {
    console.error('Error fetching SaleLogs:', error);

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
// Prueba para la operación GET de SaleLog
async function testGetSaleLogs() {
    try {
      const result = await GET();
      console.log('Resultado de la prueba GET (SaleLogs):', result);
    } catch (error) {
      console.error('Error en la prueba GET (SaleLogs):', error);
    }
  }
  
  // Llama a la función para probar la operación GET (SaleLogs) al cargar el archivo (solo para propósitos de prueba)
  testGetSaleLogs();
  