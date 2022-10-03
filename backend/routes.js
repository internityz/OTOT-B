import { Router } from "express";
import Controller from "./controllers/controller.js";
const routes = Router();
routes.get("/all", Controller.getAllStudents);
routes.get("/:id", Controller.getSingleStudent);
routes.post("/:info", Controller.addStudent);
routes.put("/:info", Controller.updateStudentName);
routes.delete("/:id", Controller.deleteStudent);

export default routes;
