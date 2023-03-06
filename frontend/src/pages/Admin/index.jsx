import ProjectInfoForm from "../../components/FormProjectsInfo";
import styled from "styled-components";
import FormProjectsArt from "../../components/FormProjectsArt";
import FormFormation from "../../components/FormFormation";
import { useContext } from "react";
import { AuthContext } from "../../utils/context";
import FormLogin from "../../components/FormLogin";

const FormationWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    & form {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
`;

function Admin() {
    const { state } = useContext(AuthContext);
    return state.user === null ? (
        <FormLogin />
    ) : (
        <FormationWrapper>
            <ProjectInfoForm />
            <FormProjectsArt />
            <FormFormation />
        </FormationWrapper>
    );
}

export default Admin;
