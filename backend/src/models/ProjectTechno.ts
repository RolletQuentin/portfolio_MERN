import { Schema, model } from "mongoose";

const projectTechnoSchema = new Schema({
    idProject: { type: Schema.Types.ObjectId, required: true },
    idTechno: { type: Schema.Types.ObjectId, required: true},
});

module.exports = model('ProjectTechno', projectTechnoSchema);