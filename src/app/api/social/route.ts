import { SocialType, SocialTypeDTO } from "@/services/social/social";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET() {
  const socialData: SocialType[] = readFile(Entity.Socials);
  return NextResponse.json(socialData);
}

export async function POST(req: any) {
  const body: SocialTypeDTO = await req.json();
  const updatedDTO = { id: uuid(), ...body };
  const socialData: SocialType[] = readFile(Entity.Socials);
  const newData = [...socialData, updatedDTO];
  const updatedData = writeFile(Entity.Socials, newData);
  return NextResponse.json(updatedData);
}
