import { Language, LanguageDTO } from "@/services/language/language";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET() {
  const LanguageData: Language[] = readFile(Entity.Language);
  LanguageData.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return NextResponse.json(LanguageData);
}

export async function POST(req: any) {
  const body: LanguageDTO = await req.json();
  const updatedDTO = {
    id: uuid(),
    ...body,
    createdAt: new Date().toISOString(),
  };
  const LanguageData: Language[] = readFile(Entity.Language);
  const newData = [...LanguageData, updatedDTO];
  writeFile(Entity.Language, newData);
  return NextResponse.json(updatedDTO, { status: 201 });
}
