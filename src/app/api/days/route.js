import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  
  const days = await prisma.day.findMany()
  
  return NextResponse.json(days)
}