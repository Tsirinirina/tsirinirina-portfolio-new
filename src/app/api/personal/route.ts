import { Personal, PersonalDTO } from "@/services/personal/personal";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextResponse } from "next/server";

export async function GET() {
  const personalData = readFile(Entity.Pesonal);
  return NextResponse.json(personalData);
}

export async function PATCH(req: any) {
  const body: PersonalDTO = await req.json();
  const personalData: Personal = readFile(Entity.Pesonal);
  const newData = { ...personalData, ...body };
  const updatedData = writeFile(Entity.Pesonal, newData);
  return NextResponse.json(updatedData);
}
