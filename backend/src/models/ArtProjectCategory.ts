import { Schema, model } from "mongoose";

const artProjectCategorySchema = new Schema({
    idProject: { type: Schema.Types.ObjectId, required: true},
    idCategory: { type: Schema.Types.ObjectId, required: true},
})

module.exports = model('ArtProjectCategory', artProjectCategorySchema);