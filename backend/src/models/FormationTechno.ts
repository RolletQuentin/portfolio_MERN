import { Schema, model } from "mongoose";

const formationTechnoSchema = new Schema({
    idFormation: { type: Schema.Types.ObjectId, required: true },
    idTechno: { type: Schema.Types.ObjectId, required: true },
})

module.exports = model('FormationTechno', formationTechnoSchema);