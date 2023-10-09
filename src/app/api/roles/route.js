// Importa el modelo Role y PrismaClient
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
//--------------------------------------------------------------------------------------------------------------
//  CREATE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Create
export async function POST(req) {
  try {
    const { description } = req.body;  // Asumiendo que description se envía en el cuerpo de la solicitud

    const newRole = await prisma.role.create({
      data: {
        description,
      },
    });

    return NextResponse.json(newRole);
  } catch (error) {
    console.error('Error creating role:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba CREATE
//--------------------------------------------------------------------------------------------------------------

// Bloque de código para probar la operación POST (solo para propósitos de prueba)
async function testPostRole() {
  try {
    // Ajusta la descripción según el nuevo rol que deseas crear
    const testReq = {
      body: {
        description: 'Nuevo Rol',
      },
    };

    const result = await POST(testReq);
    console.log('Resultado de la prueba POST (Role):', result);
  } catch (error) {
    console.error('Error en la prueba POST (Role):', error);
  }
}

// Llama a la función para probar la operación POST (Role) al cargar el archivo (solo para propósitos de prueba)
//testPostRole();

//--------------------------------------------------------------------------------------------------------------
//  Delete
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Delete
export async function DELETE(req) {
  try {
    const { role_id } = req.body;  // Asumiendo que role_id se envía en el cuerpo de la solicitud

    const deletedRole = await prisma.role.delete({
      where: {
        role_id,
      },
    });

    return NextResponse.json(deletedRole);
  } catch (error) {
    console.error('Error deleting role:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}


//--------------------------------------------------------------------------------------------------------------
//  Prueba Delete
//--------------------------------------------------------------------------------------------------------------
// Bloque de código para probar la operación DELETE (solo para propósitos de prueba)
async function testDeleteRole() {
    try {
      // Ajusta el role_id según el rol que deseas eliminar
      const testReq = {
        body: {
          role_id: 1,
        },
      };
  
      const result = await DELETE(testReq);
      console.log('Resultado de la prueba DELETE (Role):', result);
    } catch (error) {
      console.error('Error en la prueba DELETE (Role):', error);
    }
  }
  
  // Llama a la función para probar la operación DELETE (Role) al cargar el archivo (solo para propósitos de prueba)
  //testDeleteRole();
  
//--------------------------------------------------------------------------------------------------------------
//  UPDATE
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Update
export async function PUT(req) {
  try {
    const { role_id, description } = req.body;  // Asumiendo que role_id y description se envían en el cuerpo de la solicitud

    const updatedRole = await prisma.role.update({
      where: {
        role_id,
      },
      data: {
        description,
      },
    });

    return NextResponse.json(updatedRole);
  } catch (error) {
    console.error('Error updating role:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}

//--------------------------------------------------------------------------------------------------------------
//  Prueba UPDATE
//--------------------------------------------------------------------------------------------------------------

// Bloque de código para probar la operación PUT (solo para propósitos de prueba)
async function testUpdateRole() {
    try {
      // Ajusta el role_id y description según el rol que deseas actualizar
      const testReq = {
        body: {
          role_id: 2,
          description: 'Nueva descripción del rol',
        },
      };
  
      const result = await PUT(testReq);
      console.log('Resultado de la prueba PUT (Role):', result);
    } catch (error) {
      console.error('Error en la prueba PUT (Role):', error);
    }
  }
  
  // Llama a la función para probar la operación PUT (Role) al cargar el archivo (solo para propósitos de prueba)
  //testUpdateRole();

//--------------------------------------------------------------------------------------------------------------
//  GET
//--------------------------------------------------------------------------------------------------------------

// Operación CRUD Get (Obtener todos los roles)
export async function GET() {
  try {
    const roles = await prisma.role.findMany();
    return NextResponse.json(roles);
  } catch (error) {
    console.error('Error fetching roles:', error);
    return NextResponse.error('Internal Server Error', 500);
  } finally {
    await prisma.$disconnect();
  }
}


//--------------------------------------------------------------------------------------------------------------
//  Prueba GET
//--------------------------------------------------------------------------------------------------------------
// Bloque de código para probar la operación GET (solo para propósitos de prueba)
async function testGetRoles() {
    try {
      const result = await GET();
      console.log('Resultado de la prueba GET (Roles):', result);
    } catch (error) {
      console.error('Error en la prueba GET (Roles):', error);
    }
  }
  
  // Llama a la función para probar
  testGetRoles();
  