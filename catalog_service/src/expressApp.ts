import express, {Request, Response} from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import catalogRouter from './api/catalog.route'

dotenv.config();


const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});
app.use("/", catalogRouter)




export default app;