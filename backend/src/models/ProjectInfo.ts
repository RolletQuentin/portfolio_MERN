import { Schema, model } from "mongoose";

interface ProjectInfo {
    title: string;
    description: string;
    content: string;
    coverPicture: string;
    date: Date;
    githubLink?: string;
    websiteLink?: string;
}

const projectSchema = new Schema<ProjectInfo>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    coverPicture: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
    githubLink: { type: String, required: false },
    websiteLink: { type: String, required: false },
});

module.exports = model<ProjectInfo>("ProjectInfo", projectSchema);
