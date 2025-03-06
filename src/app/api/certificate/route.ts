import { Certificate, CertificateDTO } from "@/services/certificate/certificat";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET() {
  const certificateData: Certificate[] = readFile(Entity.Certificate);
  certificateData.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return NextResponse.json(certificateData);
}

export async function POST(req: any) {
  const body: CertificateDTO = await req.json();
  const updatedDTO = {
    id: uuid(),
    ...body,
    createdAt: new Date().toISOString(),
  };
  const certificateData: Certificate[] = readFile(Entity.Certificate);
  const newData = [...certificateData, updatedDTO];
  const updatedData = writeFile(Entity.Certificate, newData);
  return NextResponse.json(updatedData);
}
