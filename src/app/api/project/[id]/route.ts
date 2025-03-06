import { Project } from "@/services/project/project";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const projectsData: Project[] = readFile(Entity.Projects);
  const projectData = projectsData.find((item) => item.id === id);
  if (!projectData) {
    return NextResponse.json({ message: "Projet non trouvé" }, { status: 400 });
  }
  return NextResponse.json(projectData);
};
