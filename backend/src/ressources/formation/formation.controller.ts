import { Request, Response, Router } from "express";
import FormationService from "./formation.service";

const FormationController = Router();
const auth = require("../../middlewares/auth");

const service = new FormationService();

FormationController.get("/", service.findAll);
FormationController.get("/:id", service.findOne);
FormationController.post("/", auth, service.create);
FormationController.delete("/:id", auth, service.delete);
FormationController.put("/:id", auth, service.modifyOne);

export { FormationController };
