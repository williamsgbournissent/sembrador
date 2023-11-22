import Menu from "@/models/menu";
import { NextResponse } from "next/server";

type Menu = {
  idMenu: Number;
  fecha: String;
  opcion: String;
  tipo: String;
};

export async function POST(req: Request) {
  try {
    const data: Menu = await req.json();

    const menu = await Menu.create(data);

    if (menu) {
      return NextResponse.json(
        { message: "Creado con exito." },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Error al crear el menu." },
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
