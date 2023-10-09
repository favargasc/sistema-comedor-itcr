//--------------------------------------------------------------------------------------------------------------
//  CREATE
//--------------------------------------------------------------------------------------------------------------
// Importa el modelo WarningMessage y PrismaClient
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Operación CRUD Create para WarningMessage
export async function POST(req) {
  try {
    const { message } = req.body;  // Asumiendo que message se envía en el cuerpo de la solicitud

    // Crear un nuevo mensaje de advertencia
    const newWarningMessage = await prisma.warningMessage.create({
      data: {
        message,
      },
    });

    return NextResponse.json(newWarningMessage);
  } catch (error) {
    console.error('Error creating warning message:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba CREATE
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación CREATE de WarningMessage
async function testCreateWarningMessage() {
    try {
      // Ajusta el mensaje según la advertencia que deseas crear
      const testReq = {
        body: {
          message: 'Nueva advertencia',
        },
      };
  
      const result = await POST(testReq);
      console.log('Resultado de la prueba CREATE (WarningMessage):', result);
    } catch (error) {
      console.error('Error en la prueba CREATE (WarningMessage):', error);
    }
  }
  
  // Llama a la función para probar la operación CREATE (WarningMessage) al cargar el archivo (solo para propósitos de prueba)
 //testCreateWarningMessage();
  
//--------------------------------------------------------------------------------------------------------------
//  DELETE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Delete para WarningMessage
export async function DELETE(req) {
  try {
    const { msg_id } = req.body;  // Asumiendo que msg_id se envía en el cuerpo de la solicitud

    // Eliminar el mensaje de advertencia por ID
    const deletedWarningMessage = await prisma.warningMessage.delete({
      where: {
        msg_id,
      },
    });

    return NextResponse.json(deletedWarningMessage);
  } catch (error) {
    console.error('Error deleting warning message:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba DELETE
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación DELETE de WarningMessage
async function testDeleteWarningMessage() {
    try {
      // Ajusta el msg_id según el mensaje de advertencia que deseas eliminar
      const testReq = {
        body: {
          msg_id: 1,
        },
      };
  
      const result = await DELETE(testReq);
      console.log('Resultado de la prueba DELETE (WarningMessage):', result);
    } catch (error) {
      console.error('Error en la prueba DELETE (WarningMessage):', error);
    }
  }
  
  // Llama a la función para probar la operación DELETE (WarningMessage) al cargar el archivo (solo para propósitos de prueba)
  //testDeleteWarningMessage();
  
//--------------------------------------------------------------------------------------------------------------
//  UPDATE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Update para WarningMessage
export async function PUT(req) {
  try {
    const { msg_id, message } = req.body;  // Asumiendo que msg_id y message se envían en el cuerpo de la solicitud

    // Actualizar el mensaje de advertencia por ID
    const updatedWarningMessage = await prisma.warningMessage.update({
      where: {
        msg_id,
      },
      data: {
        message,
      },
    });

    return NextResponse.json(updatedWarningMessage);
  } catch (error) {
    console.error('Error updating warning message:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}


//--------------------------------------------------------------------------------------------------------------
//  Prueba UPDATE
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación UPDATE de WarningMessage
async function testUpdateWarningMessage() {
    try {
      // Ajusta msg_id y message según el mensaje de advertencia que deseas actualizar
      const testReq = {
        body: {
          msg_id: 2,
          message: 'Mensaje de advertencia actualizado',
        },
      };
  
      const result = await PUT(testReq);
      console.log('Resultado de la prueba UPDATE (WarningMessage):', result);
    } catch (error) {
      console.error('Error en la prueba UPDATE (WarningMessage):', error);
    }
  }
  
  // Llama a la función para probar la operación UPDATE (WarningMessage) al cargar el archivo (solo para propósitos de prueba)
  //testUpdateWarningMessage();
  
//--------------------------------------------------------------------------------------------------------------
//  GET
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Get para WarningMessage
export async function GET() {
  try {
    // Obtener todos los mensajes de advertencia
    const warningMessages = await prisma.warningMessage.findMany();
    return NextResponse.json(warningMessages);
  } catch (error) {
    console.error('Error fetching warning messages:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba GET
//--------------------------------------------------------------------------------------------------------------

// Prueba para la operación GET de WarningMessage
async function testGetWarningMessages() {
    try {
      const result = await GET();
      console.log('Resultado de la prueba GET (WarningMessages):', result);
    } catch (error) {
      console.error('Error en la prueba GET (WarningMessages):', error);
    }
  }
  
  // Llama a la función para probar la operación GET (WarningMessages) al cargar el archivo (solo para propósitos de prueba)
  testGetWarningMessages();
  