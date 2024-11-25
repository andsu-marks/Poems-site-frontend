import { type NextRequest, NextResponse } from "next/server";
import { CreateUserService } from "@/services/users/createUserService";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();

  const createUserService = new CreateUserService();
  const user = await createUserService.execute(data);

  return NextResponse.json(user);
}