import Pedido from "@/models/pedido";
import { NextResponse } from "next/server";

type pedidoCliente = {
  pedido: String;
  cliente: String;
  comentario: String;
};

export async function POST(req: Request) {
  try {
    const data: pedidoCliente = await req.json();
    if (!data.cliente || !data.pedido) {
      return NextResponse.json(
        {
          error: "Es necesaria toda la informacion para poder crear el pedido.",
        },
        { status: 400 }
      );
    }
    const orden = await Pedido.create(data);

    if (orden) {
      return NextResponse.json(
        { message: "Pedido creado con exito." },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "No fue posible crear el pedido." },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
