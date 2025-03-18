import { NextResponse, NextRequest } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "gautam",
    email: "gs8515000@gmail.com",
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  return NextResponse.json({
    message: "you are there",
  });
}
