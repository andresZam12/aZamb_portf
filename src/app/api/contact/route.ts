import { Resend } from "resend";
import { NextResponse } from "next/server";

// Escapa el texto del usuario antes de insertarlo en el HTML del correo
const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !to) {
    console.error("Faltan RESEND_API_KEY o CONTACT_EMAIL en las variables de entorno");
    return NextResponse.json({ error: "Servicio no configurado" }, { status: 500 });
  }

  try {
    const { nombre, email, asunto, mensaje, tiempo } = await request.json();

    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json({ error: "Campos incompletos" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json({ error: "Correo inválido" }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Portafolio Andrés <onboarding@resend.dev>",
      to: [to],
      replyTo: String(email),
      subject: `[Portafolio] ${String(asunto).slice(0, 150)}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px">
          <h2 style="color:#facc15;margin-bottom:4px">Nuevo mensaje desde el portafolio</h2>
          <hr style="border-color:#333;margin-bottom:20px"/>
          <p><strong>Nombre:</strong> ${esc(nombre)}</p>
          <p><strong>Correo:</strong> ${esc(email)}</p>
          <p><strong>Asunto:</strong> ${esc(asunto)}</p>
          <p><strong>Fecha:</strong> ${esc(tiempo)}</p>
          <hr style="border-color:#333;margin:20px 0"/>
          <p style="white-space:pre-wrap">${esc(String(mensaje).slice(0, 5000))}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json({ error: "Error al enviar" }, { status: 500 });
  }
}
