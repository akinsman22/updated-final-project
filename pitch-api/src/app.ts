import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { db } from "./models";
import pitchRoutes from "./routes/pitchRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(morgan("dev"));
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// incoming requests
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:4200", "http://localhost:3001"],
};
app.use(cors(corsOptions));

// Routes
app.use("/api/pitches", pitchRoutes);
app.use("/api/users", userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).end();
});

// Syncing our database
db.sync({ alter: true }).then(() => {
  console.info("connected to the database!");
});

app.listen(3000);
