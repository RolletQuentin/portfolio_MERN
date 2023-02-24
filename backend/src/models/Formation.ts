import { Schema, model } from "mongoose";

const formationSchema = new Schema({
    name: { type: String, required: true },
    formationLink: { type: String, required: true },
    description: { type: String, required: true },
})

module.exports = model('Formation', formationSchema);