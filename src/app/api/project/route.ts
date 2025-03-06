import { Project, ProjectDTO } from "@/services/project/project";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";

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
  const updateData = { ...body, createdAt: dateNow };
  let newData = [...projectData, updateData];
  const updatedData = writeFile(Entity.Projects, newData);
  return NextResponse.json(updatedData);
};
