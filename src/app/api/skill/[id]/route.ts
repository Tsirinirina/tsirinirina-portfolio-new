import { Skill, SkillDTO } from "@/services/skills/skills";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const skillData: Skill[] = readFile(Entity.Skills);
  const existedData = skillData.find((item) => item.id === id);
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

  const body: SkillDTO = await req.json();

  const skillData: Skill[] = readFile(Entity.Skills);
  const existedData = skillData.find((item) => item.id === id);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = skillData.map((item) => {
      if (item.id === id) {
        return { ...item, ...body };
      }
      return item;
    });
  }
  const updatedData: Skill[] = writeFile(Entity.Skills, newData);
  const updatedItem = updatedData.find((item) => item.id === id);
  return NextResponse.json(updatedItem);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const skillData: Skill[] = readFile(Entity.Skills);
  const existedData = skillData.find((item) => item.id === id);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = skillData.filter((item) => item.id !== id);
  }

  const updatedData = writeFile(Entity.Skills, newData);
  return NextResponse.json(updatedData);
}
