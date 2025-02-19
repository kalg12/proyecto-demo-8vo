import { NextRequest, NextResponse } from "next/server";
import { AppDataSource } from "app/lib/data-source";
import { Producto } from "app/entities/Producto";

// Inicializar la conexión a la base de datos
await AppDataSource.initialize();

export async function GET() {
  const productos = await AppDataSource.getRepository(Producto).find();
  return NextResponse.json(productos, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const productoRepo = AppDataSource.getRepository(Producto);

  const newProducto = productoRepo.create(body);
  await productoRepo.save(newProducto);

  return NextResponse.json(newProducto, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { id, ...updateData } = body;

  const productoRepo = AppDataSource.getRepository(Producto);
  await productoRepo.update(id, updateData);

  return NextResponse.json(
    { message: "Producto actualizado" },
    { status: 200 }
  );
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const productoRepo = AppDataSource.getRepository(Producto);
  await productoRepo.delete(id);

  return NextResponse.json({ message: "Producto eliminado" }, { status: 200 });
}
