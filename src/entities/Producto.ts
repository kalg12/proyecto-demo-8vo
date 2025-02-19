import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("productos")
export class Producto {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100 })
  nombre: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  precio: number;

  @Column({ type: "int", default: 0 })
  stock: number;

  @Column({ type: "varchar", length: 50 })
  categoria: string;
}
