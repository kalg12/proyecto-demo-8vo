import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("proveedores")
export class Proveedor {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100 })
  nombre: string;

  @Column({ type: "varchar", length: 100 })
  contacto: string;

  @Column({ type: "varchar", length: 15, unique: true })
  telefono: string;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string;

  @Column({ type: "text", nullable: true })
  direccion: string;
}
