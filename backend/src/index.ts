import cors from "cors";
import express from "express";
import router from "./router";

const app = express();
app.use(
  cors({
    origin: process.env.DOMAIN || "http://localhost:4000",
  })
);

app.use(router);
app.use(express.json());

export default app;
