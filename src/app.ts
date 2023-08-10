import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import * as apiController from "./controllers/api";

const app = express();

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Image Reader Server");
});

/**
 * API routes.
 */
app.post("/api/read-image", apiController.readImageText);

export default app;
