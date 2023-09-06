import data from '../../db/recipes.json'

import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(data)
}

export function POST(res, req) {
  const { nombre } = req.body

  res.send(nombre)
}
