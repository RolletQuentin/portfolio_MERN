import { Schema, model } from "mongoose";

const artProjectSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    coverPicture: { type: String, required: true },
    linkStaticPage: { type: String, required: true },
});

module.exports = model('ArtProject', artProjectSchema);