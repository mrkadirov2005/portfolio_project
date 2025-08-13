import { NextResponse } from "next/server";
import data from "@/app/data/data.json"; // ✅ static import

export async function GET() {
  return NextResponse.json(data);
}
