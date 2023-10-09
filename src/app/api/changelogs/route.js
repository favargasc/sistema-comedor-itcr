//--------------------------------------------------------------------------------------------------------------
//  CREATE
//--------------------------------------------------------------------------------------------------------------
// Importa el modelo ChangeLog, User, WarningMessage y PrismaClient
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Operación CRUD Create para ChangeLog
export async function POST(req) {
  try {
    const { user_id, warning_msg_id } = req.body;  // Asumiendo que user_id y warning_msg_id se envían en el cuerpo de la solicitud

    // Crear un nuevo registro de ChangeLog
    const newChangeLog = await prisma.changeLog.create({
      data: {
        user_id,
        warning_msg_id,
      },
    });

    return NextResponse.json(newChangeLog);
  } catch (error) {
    console.error('Error creating ChangeLog:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba CREATE
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación CREATE de ChangeLog
async function testCreateChangeLog() {
    try {
      // Ajusta user_id y warning_msg_id según el registro de ChangeLog que deseas crear
      const testReq = {
        body: {
          user_id: 7,
          warning_msg_id: 2,
        },
      };
  
      const result = await POST(testReq);
      console.log('Resultado de la prueba CREATE (ChangeLog):', result);
    } catch (error) {
      console.error('Error en la prueba CREATE (ChangeLog):', error);
    }
  }
  
  // Llama a la función para probar la operación CREATE (ChangeLog) al cargar el archivo (solo para propósitos de prueba)
 //testCreateChangeLog();
  
//--------------------------------------------------------------------------------------------------------------
//  DELETE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Delete para ChangeLog
export async function DELETE(req) {
  try {
    const { change_log_id } = req.body;  // Asumiendo que change_log_id se envía en el cuerpo de la solicitud

    // Eliminar el registro de ChangeLog por ID
    const deletedChangeLog = await prisma.changeLog.delete({
      where: {
        change_log_id,
      },
    });

    return NextResponse.json(deletedChangeLog);
  } catch (error) {
    console.error('Error deleting ChangeLog:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}
//--------------------------------------------------------------------------------------------------------------
//  Prueba DELETE
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación DELETE de ChangeLog
async function testDeleteChangeLog() {
    try {
      // Ajusta el change_log_id según el registro de ChangeLog que deseas eliminar
      const testReq = {
        body: {
          change_log_id: 5,
        },
      };
  
      const result = await DELETE(testReq);
      console.log('Resultado de la prueba DELETE (ChangeLog):', result);
    } catch (error) {
      console.error('Error en la prueba DELETE (ChangeLog):', error);
    }
  }
  
  // Llama a la función para probar la operación DELETE (ChangeLog) al cargar el archivo (solo para propósitos de prueba)
  //testDeleteChangeLog();
  
//--------------------------------------------------------------------------------------------------------------
//  UPDATE
//--------------------------------------------------------------------------------------------------------------
// Operación CRUD Update para ChangeLog
export async function PUT(req) {
  try {
    const { change_log_id, user_id, warning_msg_id } = req.body;  // Asumiendo que change_log_id, user_id y warning_msg_id se envían en el cuerpo de la solicitud

    // Actualizar el registro de ChangeLog por ID
    const updatedChangeLog = await prisma.changeLog.update({
      where: {
        change_log_id,
      },
      data: {
        user_id,
        warning_msg_id,
      },
    });

    return NextResponse.json(updatedChangeLog);
  } catch (error) {
    console.error('Error updating ChangeLog:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}


//--------------------------------------------------------------------------------------------------------------
//  Prueba UPDATE
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación UPDATE de ChangeLog
async function testUpdateChangeLog() {
    try {
      // Ajusta change_log_id, user_id y warning_msg_id según el registro de ChangeLog que deseas actualizar
      const testReq = {
        body: {
          change_log_id: 6,
          user_id: 7,
          warning_msg_id: 2,
        },
      };
  
      const result = await PUT(testReq);
      console.log('Resultado de la prueba UPDATE (ChangeLog):', result);
    } catch (error) {
      console.error('Error en la prueba UPDATE (ChangeLog):', error);
    }
  }
  
  // Llama a la función para probar la operación UPDATE (ChangeLog) al cargar el archivo (solo para propósitos de prueba)
  //testUpdateChangeLog();
  
//--------------------------------------------------------------------------------------------------------------
//  GET
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Get para ChangeLog
export async function GET() {
  try {
    // Obtener todos los registros de ChangeLog
    const changeLogs = await prisma.changeLog.findMany();
    return NextResponse.json(changeLogs);
  } catch (error) {
    console.error('Error fetching ChangeLogs:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba GET
//--------------------------------------------------------------------------------------------------------------
// Prueba para la operación GET de ChangeLog
async function testGetChangeLogs() {
    try {
      const result = await GET();
      console.log('Resultado de la prueba GET (ChangeLogs):', result);
    } catch (error) {
      console.error('Error en la prueba GET (ChangeLogs):', error);
    }
  }
  
  // Llama a la función para probar la operación GET (ChangeLogs) al cargar el archivo (solo para propósitos de prueba)
  testGetChangeLogs();
  