//Creamos una función GET para retornar un saludo
import { NextResponse } from "next/server";

//Mostrar un saludo
export async function GET() {
  return NextResponse.json({ saludo: "Hola desde el backend" });
}
