import { useState } from "react";

function ProjectInfoForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [coverPicture, setCoverPicture] = useState("");
    const [date, setDate] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const project = {
            title,
            description,
            content,
            coverPicture,
            date,
            githubLink,
            websiteLink,
        };

        const response = await fetch("http://localhost:8000/api/projectsInfo", {
            method: "POST",
            body: JSON.stringify(project),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            console.log(error);
        }
        if (response.ok) {
            setTitle("");
            setDescription("");
            setContent("");
            setCoverPicture("");
            setDate("");
            setGithubLink("");
            setWebsiteLink("");
            setError(null);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter un nouveau projet informatique</h2>

            <label>Titre :</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />

            <label>Description :</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
            />

            <label>Contenu :</label>
            <input type="text" onChange={(e) => setContent(e.target.value)} />

            <label>Image :</label>
            <input
                type="text"
                onChange={(e) => setCoverPicture(e.target.value)}
            />

            <label>Date :</label>
            <input type="text" onChange={(e) => setDate(e.target.value)} />

            <label>Github Link :</label>
            <input
                type="text"
                onChange={(e) => setGithubLink(e.target.value)}
            />

            <label>Website Link :</label>
            <input
                type="text"
                onChange={(e) => setWebsiteLink(e.target.value)}
            />

            <button>Ajouter le projet</button>
        </form>
    );
}

export default ProjectInfoForm;
