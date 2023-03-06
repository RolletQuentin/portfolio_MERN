import { useContext, useState } from "react";
import { AuthContext } from "../../utils/context";

function FormLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { setState, setToken } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password,
        };

        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();
        console.log(json);

        if (!response.ok) {
            setError(json.error);
            console.log(error);
        }
        if (response.ok) {
            localStorage.setItem("user", JSON.stringify(json));
            localStorage.setItem("token", json.token);
            setState(json);
            setToken(json.token);
            setError(null);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Se connecter</h2>

            <label>Email :</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />

            <label>Description :</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button>Connexion</button>
        </form>
    );
}

export default FormLogin;
