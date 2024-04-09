import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import cors from "cors";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/kanbas");
const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
app.listen(process.env.PORT || 4000);
