import data from '../../db/recipes.json'

import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(data)
}