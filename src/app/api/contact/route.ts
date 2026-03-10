import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "O campo nome é obrigatório." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Um e-mail válido é obrigatório." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "O campo mensagem é obrigatório." },
        { status: 400 }
      );
    }

    const contact = await prisma.contactMessage.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        message: message.trim(),
      },
    });

    return NextResponse.json(
      { success: true, id: contact.id, message: "Mensagem enviada com sucesso!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
