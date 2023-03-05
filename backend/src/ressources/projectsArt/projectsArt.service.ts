import { Request, Response } from "express";

const ProjectArt = require("../../models/ArtProject");

export default class ProjectArtService {
    async findAll(req: Request, res: Response) {
        return ProjectArt.find({})
            .sort({ date: -1 })
            .then((projects: typeof ProjectArt) =>
                res.status(200).json({ projects })
            )
            .catch((error: any) => res.status(400).json({ error }));
    }

    async create(req: Request, res: Response) {
        delete req.body._id;
        const project = new ProjectArt({ ...req.body });
        return project
            .save()
            .then((project: typeof ProjectArt) =>
                res.status(201).json({ project })
            )
            .catch((error: any) => res.status(400).json({ error }));
    }

    async findOne(req: Request, res: Response) {
        return ProjectArt.findOne({ _id: req.params.id })
            .then((project: typeof ProjectArt) =>
                res.status(200).json({ project })
            )
            .catch((error: any) => res.status(404).json({ error }));
    }

    async delete(req: Request, res: Response) {
        return ProjectArt.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Object deleted" }))
            .catch((error: any) => res.status(400).json({ error }));
    }

    async modifyOne(req: Request, res: Response) {
        return ProjectArt.updateOne(
            { _id: req.params.id },
            { ...req.body, _id: req.params.id }
        )
            .then(() => res.status(200).json({ message: "Object modified" }))
            .catch((error: any) => res.status(400).json({ error }));
    }
}
