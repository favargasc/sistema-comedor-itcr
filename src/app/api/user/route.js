/*
import data from '../../db/data.json'

import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(data)
}
*/

//--------------------------------------------------------------------------------------------------------------
//  CREATE
//--------------------------------------------------------------------------------------------------------------
// Importa el modelo User y PrismaClient
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Función para codificar la contraseña en base64
function encodeBase64(value) {
  return Buffer.from(value).toString('base64');
}

// Operación CRUD Create
export async function POST(req) {
  try {
    const { full_name, username, password } = req.body;  // Asumiendo que full_name, username, y password se envían en el cuerpo de la solicitud

    // Verificar si el nombre de usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (existingUser) {
      // El nombre de usuario ya existe, manejar el error como desees
      return NextResponse.error('Username already exists', 400);
    }

    const encodedPassword = encodeBase64(password);

    // El nombre de usuario es único, proceder con la creación del usuario
    const newUser = await prisma.user.create({
      data: {
        full_name,
        username,
        password: encodedPassword,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}


//--------------------------------------------------------------------------------------------------------------
//  Prueba CREATE
//--------------------------------------------------------------------------------------------------------------

// Bloque de código para probar la operación POST (solo para propósitos de prueba)
async function testPostUser() {
  try {
    // Ajusta full_name, username y password según el nuevo usuario que deseas crear
    const testReq = {
      body: {
        full_name: 'Nuevo Usuario',
        username: 'nuevousuario',
        password: 'nuevacontraseña',
      },
    };

    const result = await POST(testReq);
    console.log('Resultado de la prueba POST (User):', result);
  } catch (error) {
    console.error('Error en la prueba POST (User):', error);
  }
}


// Llama a las funciones para probar las operaciones POST y PUT al cargar el archivo (solo para propósitos de prueba)
//testPostUser();


//--------------------------------------------------------------------------------------------------------------
//  DELETE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Delete
export async function DELETE(req) {
  try {
    const { user_id } = req.body;  // Asumiendo que user_id se envía en el cuerpo de la solicitud

    const deletedUser = await prisma.user.delete({
      where: {
        user_id,
      },
    });

    return NextResponse.json(deletedUser);
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba DELETE
//--------------------------------------------------------------------------------------------------------------

// Bloque de código para probar la operación DELETE (solo para propósitos de prueba)
async function testDeleteUser() {
  try {
    // Ajusta el user_id según el usuario que deseas eliminar
    const testReq = {
      body: {
        user_id: 5,
      },
    };

    const result = await DELETE(testReq);
    console.log('Resultado de la prueba DELETE (User):', result);
  } catch (error) {
    console.error('Error en la prueba DELETE (User):', error);
  }
}

// Llama a la función para probar la operación DELETE (User) al cargar el archivo (solo para propósitos de prueba)
//testDeleteUser();
//--------------------------------------------------------------------------------------------------------------
//  UPDATE
//--------------------------------------------------------------------------------------------------------------



// Operación CRUD Update
export async function PUT(req) {
  try {
    const { user_id, full_name, username, password } = req.body;  // Asumiendo que user_id, full_name, username, y password se envían en el cuerpo de la solicitud

    const encodedPassword = encodeBase64(password);

    const updatedUser = await prisma.user.update({
      where: {
        user_id,
      },
      data: {
        full_name,
        username,
        password: encodedPassword,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba UPDATE
//--------------------------------------------------------------------------------------------------------------

// Bloque de código para probar la operación PUT (solo para propósitos de prueba)
async function testUpdateUser() {
  try {
    // Ajusta user_id, full_name, username y password según el usuario que deseas actualizar
    const testReq = {
      body: {
        user_id: 7,
        full_name: 'Nombre Actualizado',
        username: 'usuarioactualizado',
        password: 'contraseñaactualizada',
      },
    };

    const result = await PUT(testReq);
    console.log('Resultado de la prueba PUT (User):', result);
  } catch (error) {
    console.error('Error en la prueba PUT (User):', error);
  }
}
// Llama a la función para probar la operación PUT (User) al cargar el archivo (solo para propósitos de prueba)
//testUpdateUser();

//--------------------------------------------------------------------------------------------------------------
//  GET
//--------------------------------------------------------------------------------------------------------------
// Operación CRUD Get (Obtener todos los usuarios)
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}


//--------------------------------------------------------------------------------------------------------------
//  Prueba GET
//--------------------------------------------------------------------------------------------------------------
// Bloque de código para probar la operación GET (solo para propósitos de prueba)
async function testGetUsers() {
  try {
    const result = await GET();
    console.log('Resultado de la prueba GET (Users):', result);
  } catch (error) {
    console.error('Error en la prueba GET (Users):', error);
  }
}

// Llama a la función para probar la operación GET (Users) al cargar el archivo (solo para propósitos de prueba)
testGetUsers();
