import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(8800, () => console.log(`Server running on port: http://localhost:8800`));
