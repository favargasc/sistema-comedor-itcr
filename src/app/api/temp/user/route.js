import data from "../../../data/users.json";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(data);
}
