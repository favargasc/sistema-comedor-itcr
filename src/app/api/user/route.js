import data from '../../db/data.json'

import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(data)
}