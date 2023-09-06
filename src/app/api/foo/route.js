import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({msg: "holamundo"})
}
 
// dos formas parametros | bodys

export async function POST(request) {
  const { username, password } = await request.json()

  const res =  (username === password) ? true : false

  return NextResponse.json({res: res})
}

export async function PUT(request) {
  const { username, password } = await request.json()

  const res =  (username === password) ? true : false

  return NextResponse.json({res: res})
}