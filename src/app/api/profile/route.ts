import User from "@/models/user";
import { NextResponse } from "next/server";

type Profile = {
  fullname: string;
  email: string;
  direccion: string;
  departamento?: string;
  celular: number;
};

export async function POST(request: Request) {
  try {
    const data: Profile = await request.json();
    const existingEmail = await User.findOne({ email: data.email });

    if (existingEmail) {
      return NextResponse.json("El correo ya esta en uso.");
    }

    const user = await User.create(data);

    if (user) {
      return NextResponse.json("Creacion del usuario exitosa.");
    } else {
      return NextResponse.json("Error al crear el usuario.");
    }
  } catch (error) {
    return NextResponse.json("Error interno del servidor.");
  }
}
