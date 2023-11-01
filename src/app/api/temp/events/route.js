import fs from "fs/promises";

import { NextResponse } from "next/server";

import data from "../../../data/events.json";

export async function GET() {
  return NextResponse.json(data);
}

export async function POST(req) {
  const foodURL =
    "C:/Users/Fabian/Desktop/sistema-comedor-itcr/src/app/data/events.json";

  const { id, food } = await req.json();

  console.log(food);

  const updatedEvent = data.find((event) => event.id === id);
  const updatedFood = [...updatedEvent.food, food];
  const updatedData = data.map((event) =>
    event.id === id ? { ...event, food: updatedFood } : event
  );

  const options = {
    indent: 2,
    newline: "\n",
  };

  await fs.writeFile(foodURL, JSON.stringify(updatedData, options));
  return NextResponse.json({ res: "OK" });
}
