import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/users.entitie";
import { createTables1677548509547 } from "./migrations/1677548509547-createTables";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ['src/entities/*.ts'],
      }
    : {
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        logging: false,
        synchronize: false,
        entities: [User],
        migrations: [createTables1677548509547],
      }
);

export default AppDataSource;
