import { Schema, model } from "mongoose";

const technoSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    coverPicture: { type: String, required: true },
})

module.exports = model('Techno', technoSchema);