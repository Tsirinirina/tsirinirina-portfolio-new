import { SocialType, SocialTypeDTO } from "@/services/social/social";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body: SocialTypeDTO = await req.json();

  const socialData: SocialType[] = readFile(Entity.Socials);
  const existedData = socialData.find((item) => item.id === id);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = socialData.map((item) => {
      if (item.id === id) {
        return { id: id, ...body };
      }
      return item;
    });
  }
  const updatedData: SocialType[] = writeFile(Entity.Socials, newData);
  const updatedItem = updatedData.find((item) => item.id === id);
  return NextResponse.json(updatedItem);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const socialData: SocialType[] = readFile(Entity.Socials);
  const existedData = socialData.find((item) => item.id === id);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = socialData.filter((item) => item.id !== id);
  }

  const updatedData = writeFile(Entity.Socials, newData);
  return NextResponse.json(updatedData);
}
