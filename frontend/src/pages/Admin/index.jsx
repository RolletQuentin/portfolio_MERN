import ProjectInfoForm from "../../components/FormProjectsInfo";
import styled from "styled-components";
import FormProjectsArt from "../../components/FormProjectsArt";
import FormFormation from "../../components/FormFormation";

const FormationWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    & form {
        display: flex;
        flex-direction: column;
    }
`;

function Admin() {
    return (
        <FormationWrapper>
            <ProjectInfoForm />
            <FormProjectsArt />
            <FormFormation />
        </FormationWrapper>
    );
}

export default Admin;
