// import { getExploreData } from "@/lib/prismaClient";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";

export async function GET() {
  // return NextResponse.json({ data: "hello" });

  try {
    // const data = await getExploreData();
    // return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
