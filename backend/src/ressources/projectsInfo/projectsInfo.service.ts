import { Request, Response } from "express";

const ProjectInfo = require("../../models/ProjectInfo");

export default class ProjectInfoService {
    async findAll(req: Request, res: Response) {
        return ProjectInfo.find({})
            .sort({ date: -1 })
            .then((projects: typeof ProjectInfo) =>
                res.status(200).json({ projects })
            )
            .catch((error: any) => res.status(400).json({ error }));
    }

    async create(req: Request, res: Response) {
        delete req.body._id;
        const project = new ProjectInfo({ ...req.body });
        return project
            .save()
            .then((project: typeof ProjectInfo) =>
                res.status(201).json({ project })
            )
            .catch((error: any) => res.status(400).json({ error }));
    }

    async findOne(req: Request, res: Response) {
        return ProjectInfo.findOne({ _id: req.params.id })
            .then((project: typeof ProjectInfo) =>
                res.status(200).json({ project })
            )
            .catch((error: any) => res.status(404).json({ error }));
    }

    async delete(req: Request, res: Response) {
        return ProjectInfo.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Object deleted" }))
            .catch((error: any) => res.status(400).json({ error }));
    }

    async modifyOne(req: Request, res: Response) {
        return ProjectInfo.updateOne(
            { _id: req.params.id },
            { ...req.body, _id: req.params.id }
        )
            .then(() => res.status(200).json({ message: "Object modified" }))
            .catch((error: any) => res.status(400).json({ error }));
    }
}
