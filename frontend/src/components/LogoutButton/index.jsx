import { useContext } from "react";
import { AuthContext } from "../../utils/context";

function LogoutButton() {
    const { setState } = useContext(AuthContext);

    return <div onClick={() => setState({ user: null })}>Logout</div>;
}

export default LogoutButton;
