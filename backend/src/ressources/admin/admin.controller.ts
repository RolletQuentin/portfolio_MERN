import { Request, Response, Router } from "express";
import AdminService from "./admin.service";

const AdminController = Router();
const auth = require("../../middlewares/auth");
const service = new AdminService();

AdminController.post("/signup", service.signup);
AdminController.post("/login", service.login);

export { AdminController };
