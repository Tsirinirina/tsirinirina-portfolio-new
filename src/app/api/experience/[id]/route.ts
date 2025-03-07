import { Experience, ExperienceDTO } from "@/services/experience/experience";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const experienceData: Experience[] = readFile(Entity.Experiences);
  const existedData = experienceData.find((item) => item.id === id);
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

  const body: ExperienceDTO = await req.json();

  const experienceData: Experience[] = readFile(Entity.Experiences);
  const existedData = experienceData.find((item) => item.id === id);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = experienceData.map((item) => {
      if (item.id === id) {
        return { ...item, ...body };
      }
      return item;
    });
  }
  const updatedData: Experience[] = writeFile(Entity.Experiences, newData);
  const updatedItem = updatedData.find((item) => item.id === id);
  return NextResponse.json(updatedItem);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const experienceData: Experience[] = readFile(Entity.Experiences);
  const existedData = experienceData.find((item) => item.id === id);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = experienceData.filter((item) => item.id !== id);
  }

  const updatedData = writeFile(Entity.Experiences, newData);
  return NextResponse.json(updatedData);
}
