import { SocialType, SocialTypeDTO } from "@/services/social/social";
import { UrlType, UrlTypeDTO } from "@/services/url/url";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET() {
  const urlsData: UrlType[] = readFile(Entity.Urls);
  return NextResponse.json(urlsData);
}

export async function POST(req: any) {
  const body: UrlTypeDTO[] = await req.json();
  const updatedDTO = {
    id: uuid(),
    ...body,
    createdAt: new Date().toISOString(),
  };
  const urlsData: UrlType[] = readFile(Entity.Urls);
  const newData = [...urlsData, updatedDTO];
  const updatedData = writeFile(Entity.Urls, newData);
  return NextResponse.json(updatedData);
}
