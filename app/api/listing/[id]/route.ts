import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "https://garage-backend.onrender.com/getListing"

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;

  const res = await fetch(`${BACKEND_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
