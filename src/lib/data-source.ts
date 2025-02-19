import { Alumno } from "app/entities/Alumnos";
import { Compra } from "app/entities/Compra";
import { Producto } from "app/entities/Producto";
import { Proveedor } from "app/entities/Proveedor";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Alumno, Compra, Producto, Proveedor], // Asegúrate de importar correctamente
});
