import { Proveedor } from "app/entities/Proveedor";
import { AppDataSource } from "app/lib/data-source";
import { NextRequest, NextResponse } from "next/server";

// Inicializar la conexión a la base de datos
await AppDataSource.initialize();

export async function GET() {
  const proveedores = await AppDataSource.getRepository(Proveedor).find();
  return NextResponse.json(proveedores, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const proveedorRepo = AppDataSource.getRepository(Proveedor);

  const newProveedor = proveedorRepo.create(body);
  await proveedorRepo.save(newProveedor);

  return NextResponse.json(newProveedor, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { id, ...updateData } = body;

  const proveedorRepo = AppDataSource.getRepository(Proveedor);
  await proveedorRepo.update(id, updateData);

  return NextResponse.json(
    { message: "Proveedor actualizado" },
    { status: 200 }
  );
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const proveedorRepo = AppDataSource.getRepository(Proveedor);
  await proveedorRepo.delete(id);

  return NextResponse.json({ message: "Proveedor eliminado" }, { status: 200 });
}
