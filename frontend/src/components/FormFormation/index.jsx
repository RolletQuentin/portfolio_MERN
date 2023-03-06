import { useContext, useState } from "react";
import { AuthContext } from "../../utils/context";

function FormFormation() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [formationLink, setFormationLink] = useState("");
    const [error, setError] = useState(null);
    const { token } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formation = {
            name,
            description,
            formationLink,
        };

        const response = await fetch("http://localhost:8000/api/formation", {
            method: "POST",
            body: JSON.stringify(formation),
            headers: {
                Authorization: `Bearer ${token}`,
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
            setFormationLink("");
            setError(null);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter une nouvelle formation</h2>

            <label>Nom de la formation :</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />

            <label>Description :</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
            />

            <label>Website Link :</label>
            <input
                type="text"
                onChange={(e) => setFormationLink(e.target.value)}
            />

            <button>Ajouter la formation</button>
        </form>
    );
}

export default FormFormation;
