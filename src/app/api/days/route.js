/*
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  
  const days = await prisma.day.findMany()
  
  return NextResponse.json(days)
}
*/

//--------------------------------------------------------------------------------------------------------------
//  POST
//--------------------------------------------------------------------------------------------------------------

// Importa el modelo Day y PrismaClient
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const { name } = req.body;  // Asumiendo que el nombre del día se envía en el cuerpo de la solicitud
    const newDay = await prisma.day.create({
      data: {
        name,
      },
    });

    // Imprime el nuevo día creado en la consola (solo para propósitos de prueba)
    console.log('Nuevo día creado:', newDay);

    return NextResponse.json(newDay);
  } catch (error) {
    console.error('Error creating day:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba POST
//--------------------------------------------------------------------------------------------------------------

// Bloque de código para probar la operación POST (solo para propósitos de prueba)
async function testPost() {
  try {
    const testReq = {
      body: {
        name: 'Día de prueba',  // Ajusta esto según tus datos de prueba
      },
    };

    const result = await POST(testReq);
    console.log('Resultado de la prueba POST:', result);
  } catch (error) {
    console.error('Error en la prueba POST:', error);
  }
}

// Llama a la función para probar la operación POST al cargar el archivo (solo para propósitos de prueba)
// testPost();

//--------------------------------------------------------------------------------------------------------------
//  DELETE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Delete
export async function DELETE(req) {
  try {
    const { day_id } = req.body;  // Asumiendo que day_id se envía en el cuerpo de la solicitud

    const deletedDay = await prisma.day.delete({
      where: {
        day_id,
      },
    });

    return NextResponse.json(deletedDay);
  } catch (error) {
    console.error('Error deleting day:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba DELETE
//--------------------------------------------------------------------------------------------------------------

// Bloque de código para probar la operación DELETE (solo para propósitos de prueba)
async function testDelete() {
  try {
    // Ajusta el day_id según el día que deseas eliminar
    const testReq = {
      body: {
        day_id: 3,
      },
    };

    const result = await DELETE(testReq);
    console.log('Resultado de la prueba DELETE:', result);
  } catch (error) {
    console.error('Error en la prueba DELETE:', error);
  }
}

// Llama a la función para probar la operación DELETE al cargar el archivo (solo para propósitos de prueba)
// testDelete();

//--------------------------------------------------------------------------------------------------------------
//  UPDATE
//--------------------------------------------------------------------------------------------------------------


// Operación CRUD Update
export async function PUT(req) {
  try {
    const { day_id, name } = req.body;  // Asumiendo que day_id y name se envían en el cuerpo de la solicitud

    const updatedDay = await prisma.day.update({
      where: {
        day_id,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(updatedDay);
  } catch (error) {
    console.error('Error updating day:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}


//--------------------------------------------------------------------------------------------------------------
//  Prueba UPDATE
//--------------------------------------------------------------------------------------------------------------


// Bloque de código para probar la operación PUT (solo para propósitos de prueba)
async function testUpdate() {
  try {
    // Ajusta el day_id y name según el día que deseas actualizar
    const testReq = {
      body: {
        day_id: 4,
        name: 'Nuevo nombre del día',
      },
    };

    const result = await PUT(testReq);
    console.log('Resultado de la prueba PUT:', result);
  } catch (error) {
    console.error('Error en la prueba PUT:', error);
  }
}

// Llama a la función para probar la operación PUT al cargar el archivo (solo para propósitos de prueba)
// testUpdate();

//--------------------------------------------------------------------------------------------------------------
//  GET
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Get (Obtener todos los días)
export async function GET() {
  try {
    const days = await prisma.day.findMany();
    return NextResponse.json(days);
  } catch (error) {
    console.error('Error fetching days:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba GET
//--------------------------------------------------------------------------------------------------------------

// Bloque de código para probar la operación GET (solo para propósitos de prueba)
async function testGet() {
  try {
    const result = await GET();
    console.log('Resultado de la prueba GET:', result);
  } catch (error) {
    console.error('Error en la prueba GET:', error);
  }
}

// Llama a la función para probar la operación GET al cargar el archivo (solo para propósitos de prueba)
testGet();