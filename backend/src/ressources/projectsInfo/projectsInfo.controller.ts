import { Request, Response, Router } from "express";
import ProjectInfoService from "./projectsInfo.service";

const ProjectsInfoController = Router();

const service = new ProjectInfoService();

ProjectsInfoController.get("/", service.findAll);
ProjectsInfoController.get("/:id", service.findOne);
ProjectsInfoController.post("/", service.create);

export { ProjectsInfoController };
