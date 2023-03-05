import { useFetch } from "../../utils/hooks";
import { Loader } from "../../utils/Atoms";
import styled from "styled-components";
import Card from "../../components/Card";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

const PortfolioContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const CardsContainer = styled.div`
    width: 100%;
`;

function PortfolioInfo() {
    const { data, isLoading, error } = useFetch(
        "http://localhost:8000/api/projectsInfo"
    );
    console.log(data);
    const { projects } = data;
    const { themeMode } = useContext(ThemeContext);

    if (error) {
        return <div>Oups, il y a un problème</div>;
    }

    return (
        <PortfolioContainer>
            {isLoading ? (
                <Loader />
            ) : (
                <CardsContainer>
                    {projects.map((project) => (
                        <Card
                            key={`${project._id}`}
                            id={project._id}
                            title={project.title}
                            description={project.description}
                            coverPicture={project.coverPicture}
                            themeMode={themeMode}
                        />
                    ))}
                </CardsContainer>
            )}
        </PortfolioContainer>
    );
}

export default PortfolioInfo;
