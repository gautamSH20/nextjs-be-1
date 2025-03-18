import { NextResponse, NextRequest } from "next/server";
import client from "@/app/lib/db";

export async function GET() {
  const data = await client.user.findFirst({});
  return NextResponse.json({
    name: data?.username,
    password: data?.password,
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  await client.user.create({
    data: {
      username: data.username,
      password: data.password,
    },
  });
  return NextResponse.json({
    message: "you are there",
  });
}
