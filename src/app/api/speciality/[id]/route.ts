import { Speciality, SpecialityDTO } from "@/services/speciality/speciality";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const specialityData: Speciality[] = readFile(Entity.Speciality);
  const existedData = specialityData.find((item) => item.id === id);
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  }
  return NextResponse.json(existedData, { status: 200 });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body: SpecialityDTO = await req.json();

  const specialityData: Speciality[] = readFile(Entity.Speciality);
  const existedData = specialityData.find((item) => item.id === id);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = specialityData.map((item) => {
      if (item.id === id) {
        return { ...item, ...body };
      }
      return item;
    });
  }
  const updatedData: Speciality[] = writeFile(Entity.Speciality, newData);
  const updatedItem = updatedData.find((item) => item.id === id);
  return NextResponse.json(updatedItem);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const specialityData: Speciality[] = readFile(Entity.Speciality);
  const existedData = specialityData.find((item) => item.id === id);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = specialityData.filter((item) => item.id !== id);
  }

  const updatedData = writeFile(Entity.Speciality, newData);
  return NextResponse.json(updatedData);
}
