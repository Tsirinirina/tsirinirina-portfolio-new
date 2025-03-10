import { Language, LanguageDTO } from "@/services/language/language";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const languageData: Language[] = readFile(Entity.Language);
  const existedData = languageData.find((item) => item.id === id);
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

  const body: LanguageDTO = await req.json();

  const languageData: Language[] = readFile(Entity.Language);
  const existedData = languageData.find((item) => item.id === id);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = languageData.map((item) => {
      if (item.id === id) {
        return { ...item, ...body };
      }
      return item;
    });
  }
  const updatedData: Language[] = writeFile(Entity.Language, newData);
  const updatedItem = updatedData.find((item) => item.id === id);
  return NextResponse.json(updatedItem);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const languageData: Language[] = readFile(Entity.Language);
  const existedData = languageData.find((item) => item.id === id);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = languageData.filter((item) => item.id !== id);
  }

  const updatedData = writeFile(Entity.Language, newData);
  return NextResponse.json(updatedData);
}
