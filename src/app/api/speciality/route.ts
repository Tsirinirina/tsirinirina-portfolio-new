import { Speciality, SpecialityDTO } from "@/services/speciality/speciality";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET() {
  const specialityData: Speciality[] = readFile(Entity.Speciality);
  specialityData.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return NextResponse.json(specialityData);
}

export async function POST(req: any) {
  const body: SpecialityDTO = await req.json();
  const updatedDTO = {
    id: uuid(),
    ...body,
    createdAt: new Date().toISOString(),
  };
  const specialityData: Speciality[] = readFile(Entity.Speciality);
  const newData = [...specialityData, updatedDTO];
  writeFile(Entity.Speciality, newData);
  return NextResponse.json(updatedDTO, { status: 201 });
}
