import { Request, Response, Router } from "express";
import ProjectArtService from "./projectsArt.service";

const ProjectsArtController = Router();
const auth = require("../../middlewares/auth");

const service = new ProjectArtService();

ProjectsArtController.get("/", service.findAll);
ProjectsArtController.get("/:id", service.findOne);
ProjectsArtController.post("/", auth, service.create);
ProjectsArtController.delete("/:id", auth, service.delete);
ProjectsArtController.put("/:id", auth, service.modifyOne);

export { ProjectsArtController };
