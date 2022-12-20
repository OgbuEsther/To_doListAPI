import express, { Application, Request, Response } from "express";
require("../config/db");
import cors from "cors";
import router from "../router/todoRouter";
const port: number | string = process.env.port || 2056;

const server: Application = express();
server.use(express.json());

server.use(cors());

server.use("/todoapp", router);

server.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "server is up and running",
  });
});

server.listen(port, () => {
  console.log(`server is up and running on port : ${port} `);
});
