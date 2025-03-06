import { Certificate, CertificateDTO } from "@/services/certificate/certificat";
import { Entity, readFile, writeFile } from "@/utils/json.utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const certificateData: Certificate[] = readFile(Entity.Certificate);
  const existedData = certificateData.find((item) => item.id === id);
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

  const body: CertificateDTO = await req.json();

  const certificateData: Certificate[] = readFile(Entity.Certificate);
  const existedData = certificateData.find((item) => item.id === id);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = certificateData.map((item) => {
      if (item.id === id) {
        return { ...item, ...body };
      }
      return item;
    });
  }
  const updatedData: Certificate[] = writeFile(Entity.Certificate, newData);
  const updatedItem = updatedData.find((item) => item.id === id);
  return NextResponse.json(updatedItem);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const certificateData: Certificate[] = readFile(Entity.Certificate);
  const existedData = certificateData.find((item) => item.id === id);
  let newData = [];
  if (!existedData) {
    return NextResponse.json({ message: "Objet non trouvé" }, { status: 404 });
  } else {
    newData = certificateData.filter((item) => item.id !== id);
  }

  const updatedData = writeFile(Entity.Certificate, newData);
  return NextResponse.json(updatedData);
}
