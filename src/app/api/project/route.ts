import { Project, ProjectDTO } from "@/services/project/project";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export const GET = async () => {
  const projectData: Project[] = readFile(Entity.Projects);
  const sortedData = projectData.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  writeFile(Entity.Projects, sortedData);
  return NextResponse.json(sortedData);
};

export const POST = async (req: NextRequest) => {
  const body: ProjectDTO = await req.json();
  const dateNow = new Date().toISOString().split("T")[0];
  if (!body) {
    return NextResponse.json({ message: "Les données ne doit pas être vide" });
  }
  const projectData: Project[] = readFile(Entity.Projects);
  const updateDTO = { id: uuid(), ...body, createdAt: dateNow };
  let newData = [...projectData, updateDTO];
  const updatedData = writeFile(Entity.Projects, newData);
  return NextResponse.json(updatedData, { status: 201 });
};
