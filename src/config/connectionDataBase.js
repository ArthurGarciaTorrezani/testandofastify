import * as dotenv from "dotenv";
import fastifyPostgres from "@fastify/postgres";

dotenv.config();

const connectionString = `postgresql://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}?schema=public`;

const connectionDataBase = (app) => {
  app.register(fastifyPostgres, {
    connectionString: connectionString,
  });
};

export default connectionDataBase;
