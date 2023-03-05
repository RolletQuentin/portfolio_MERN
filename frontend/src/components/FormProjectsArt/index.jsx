import { useState } from "react";

function FormProjectsArt() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [coverPicture, setCoverPicture] = useState("");
    const [formationLink, setFormationLink] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const project = {
            name,
            description,
            coverPicture,
            formationLink,
        };

        const response = await fetch("http://localhost:8000/api/formation", {
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
            setName("");
            setDescription("");
            setCoverPicture("");
            setFormationLink("");
            setError(null);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter une nouvelle oeuvre d'art</h2>

            <label>Nom de la formation :</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />

            <label>Description :</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
            />

            <label>Image de couverture :</label>
            <input
                type="text"
                onChange={(e) => setCoverPicture(e.target.value)}
            />

            <label>Website Link :</label>
            <input
                type="text"
                onChange={(e) => setFormationLink(e.target.value)}
            />

            <button>Ajouter le projet</button>
        </form>
    );
}

export default FormProjectsArt;
