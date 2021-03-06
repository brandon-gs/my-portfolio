import express from "express";
const app = express();

// controllers
import { favicon } from "./controllers/global";

// Config
app.set("port", process.env.PORT || 3000);

// Routes
app.get("/favicon.ico", favicon);

export default app;
