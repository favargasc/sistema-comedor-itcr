import fs from "fs/promises";

import { NextResponse } from "next/server";

import data from "../../../data/food.json";

export async function POST(req) {
  const foodURL =
    "C:/Users/Fabian/Desktop/sistema-comedor-itcr/src/app/data/food.json";

  const body = await req.json();

  const newData = data.filter((item) => item.id !== body.id);

  await fs.writeFile(foodURL, JSON.stringify(newData));

  return NextResponse.json({ res: "OK" });
}
