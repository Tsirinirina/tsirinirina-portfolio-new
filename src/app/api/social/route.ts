import { SocialType, SocialTypeDTO } from "@/services/social/social";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const socialData = readFile(Entity.Socials);
  return NextResponse.json(socialData);
}

export async function POST(req: any) {
  const body: SocialTypeDTO = await req.json();
  const socialData: SocialType[] = readFile(Entity.Socials);
  const newData = [...socialData, body];
  const updatedData = writeFile(Entity.Socials, newData);
  return NextResponse.json(updatedData);
}

export async function PATCH(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const name = params.get("name");
  const body: SocialTypeDTO = await req.json();

  const socialData: SocialType[] = readFile(Entity.Socials);
  const existedData = socialData.find((item) => item.name === name);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = socialData.map((item) => {
      if (item.name === body.name) {
        return body;
      }
      return item;
    });
  }

  const updatedData = writeFile(Entity.Socials, newData);
  return NextResponse.json(updatedData);
}

export async function DELETE(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const name = params.get("name");
  const socialData: SocialType[] = readFile(Entity.Socials);
  const existedData = socialData.find((item) => item.name === name);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = socialData.filter((item) => item.name !== name);
  }

  const updatedData = writeFile(Entity.Socials, newData);
  return NextResponse.json(updatedData);
}
