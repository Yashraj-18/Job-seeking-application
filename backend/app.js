import express from "express";
import Dotenv from "dotenv";

const app = express();
Dotenv.config({ path: "./config/config.env" });

export default app;