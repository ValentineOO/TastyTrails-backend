import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log("Connected to database successfully."));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health is fine" });
});

app.use("/api/my/user", myUserRoute);

app.listen(7000, () => {
  console.log("Server started on localhost:7000");
});
