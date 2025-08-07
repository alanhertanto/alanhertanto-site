import { prisma } from "@/lib/prisma";

export async function GET() {
  const entries = await prisma.guestEntry.findMany({
    orderBy: { date: "desc" },
  });
  return Response.json(entries);
}

export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !message) {
    return new Response(JSON.stringify({ error: "Nama dan pesan wajib diisi." }), { status: 400 });
  }

  if (email && !/\S+@\S+\.\S+/.test(email)) {
    return new Response(JSON.stringify({ error: "Format email tidak valid." }), { status: 400 });
  }

  const newEntry = await prisma.guestEntry.create({
    data: {
      name,
      email,
      message,
    },
  });

  return Response.json(newEntry, { status: 201 });
}
