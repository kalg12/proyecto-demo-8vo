import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Proveedor } from "./Proveedor";
import { Producto } from "./Producto";

@Entity("compras")
export class Compra {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.id)
  @JoinColumn({ name: "proveedor_id" })
  proveedor: Proveedor;

  @ManyToOne(() => Producto, (producto) => producto.id)
  @JoinColumn({ name: "producto_id" })
  producto: Producto;

  @Column({ type: "int" })
  cantidad: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  precio_compra: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;
}
