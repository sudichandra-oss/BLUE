import { NextResponse } from "next/server";
import { getSeoConfig } from "@/lib/seo-config";

export async function GET() {
  const seoConfig = getSeoConfig();
  return NextResponse.json(seoConfig);
}
