import { Request, Response, Router } from "express";
import ProjectInfoService from "./projectsInfo.service";

const ProjectsInfoController = Router();
const auth = require("../../middlewares/auth");

const service = new ProjectInfoService();

ProjectsInfoController.get("/", service.findAll);
ProjectsInfoController.get("/:id", service.findOne);
ProjectsInfoController.post("/", auth, service.create);
ProjectsInfoController.delete("/:id", auth, service.delete);
ProjectsInfoController.put("/:id", auth, service.modifyOne);

export { ProjectsInfoController };
