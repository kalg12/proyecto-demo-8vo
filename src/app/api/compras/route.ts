import { Compra } from "app/entities/Compra";
import { AppDataSource } from "app/lib/data-source";
import { NextRequest, NextResponse } from "next/server";

// Inicializar la conexión a la base de datos
await AppDataSource.initialize();

export async function GET() {
  const compras = await AppDataSource.getRepository(Compra).find({
    relations: ["proveedor", "producto"],
  });
  return NextResponse.json(compras, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const compraRepo = AppDataSource.getRepository(Compra);

  const newCompra = compraRepo.create(body);
  await compraRepo.save(newCompra);

  return NextResponse.json(newCompra, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { id, ...updateData } = body;

  const compraRepo = AppDataSource.getRepository(Compra);
  await compraRepo.update(id, updateData);

  return NextResponse.json({ message: "Compra actualizada" }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const compraRepo = AppDataSource.getRepository(Compra);
  await compraRepo.delete(id);

  return NextResponse.json({ message: "Compra eliminada" }, { status: 200 });
}
