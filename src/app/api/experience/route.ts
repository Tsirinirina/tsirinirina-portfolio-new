import { Experience, ExperienceDTO } from "@/services/experience/experience";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET() {
  const experienceData: Experience[] = readFile(Entity.Experiences);
  experienceData.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return NextResponse.json(experienceData);
}

export async function POST(req: any) {
  const body: ExperienceDTO = await req.json();
  const updatedDTO = {
    id: uuid(),
    ...body,
    createdAt: new Date().toISOString(),
  };
  const experienceData: Experience[] = readFile(Entity.Experiences);
  const newData = [...experienceData, updatedDTO];
  writeFile(Entity.Experiences, newData);
  return NextResponse.json(updatedDTO, { status: 201 });
}
