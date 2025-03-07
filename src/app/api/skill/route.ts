import { Skill, SkillDTO } from "@/services/skills/skills";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET() {
  const skillData: Skill[] = readFile(Entity.Skills);
  skillData.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return NextResponse.json(skillData);
}

export async function POST(req: any) {
  const body: SkillDTO = await req.json();
  const updatedDTO = {
    id: uuid(),
    ...body,
    createdAt: new Date().toISOString(),
  };
  const skillData: Skill[] = readFile(Entity.Skills);
  const newData = [...skillData, updatedDTO];
  writeFile(Entity.Skills, newData);
  return NextResponse.json(updatedDTO, { status: 201 });
}
