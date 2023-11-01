import fs from "fs/promises";

import { NextResponse } from "next/server";

import data from "../../../data/food.json";

export async function GET() {
  return NextResponse.json(data);
}

export async function POST(req) {
  const foodURL =
    "C:/Users/Fabian/Desktop/sistema-comedor-itcr/src/app/data/food.json";

  const body = await req.json();

  data.push(body);

  const options = {
    indent: 2,
    newline: "\n",
  };

  await fs.writeFile(foodURL, JSON.stringify(data, options));
  return NextResponse.json({ res: "OK" });
}
