import { Request, Response } from "express";

const Formation = require("../../models/Formation");

export default class FormationService {
    async findAll(req: Request, res: Response) {
        return Formation.find({})
            .sort({ date: -1 })
            .then((formations: typeof Formation) =>
                res.status(200).json({ formations })
            )
            .catch((error: any) => res.status(400).json({ error }));
    }

    async create(req: Request, res: Response) {
        delete req.body._id;
        const formation = new Formation({ ...req.body });
        return formation
            .save()
            .then((formation: typeof Formation) =>
                res.status(201).json({ formation })
            )
            .catch((error: any) => res.status(400).json({ error }));
    }

    async findOne(req: Request, res: Response) {
        return Formation.findOne({ _id: req.params.id })
            .then((formation: typeof Formation) =>
                res.status(200).json({ formation })
            )
            .catch((error: any) => res.status(404).json({ error }));
    }

    async delete(req: Request, res: Response) {
        return Formation.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Object deleted" }))
            .catch((error: any) => res.status(400).json({ error }));
    }

    async modifyOne(req: Request, res: Response) {
        return Formation.updateOne(
            { _id: req.params.id },
            { ...req.body, _id: req.params.id }
        )
            .then(() => res.status(200).json({ message: "Object modified" }))
            .catch((error: any) => res.status(400).json({ error }));
    }
}
