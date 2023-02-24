import { Schema, model  } from "mongoose";

const artCategorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    coverPicture: { type: String, required: true },
})

module.exports = model('ArtCategory', artCategorySchema);