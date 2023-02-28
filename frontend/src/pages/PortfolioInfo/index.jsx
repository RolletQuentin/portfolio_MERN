import { useFetch } from "../../utils/hooks";
import { Loader } from "../../utils/Atoms";

function PortfolioInfo() {
    const { data, isLoading, error } = useFetch(
        "http://localhost:8000/api/projectsInfo"
    );
    const { projects } = data;

    if (error) {
        return <div>Oups, il y a un problème</div>;
    }

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    {projects.map((project) => (
                        <div key={`${project._id}`}>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PortfolioInfo;
