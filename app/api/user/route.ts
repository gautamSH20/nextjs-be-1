import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "gautam",
    email: "gs8515000@gmail.com",
  });
}
