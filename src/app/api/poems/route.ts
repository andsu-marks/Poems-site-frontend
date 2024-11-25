import { NextRequest, NextResponse } from "next/server";

import { CreatePoemService } from "@/services/poems/createPoemService";
import { GetAllPoemsService } from "@/services/poems/getAllPoemsService";

export async function GET() {
  const getAllPoemsService = new GetAllPoemsService();
  const poems = await getAllPoemsService.execute();

  return NextResponse.json(poems);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();

  const createPoemService = new CreatePoemService();
  const poem = await createPoemService.execute(data);

  return NextResponse.json(poem);
}
