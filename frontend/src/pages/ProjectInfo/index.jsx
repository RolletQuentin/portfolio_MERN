import { useParams } from "react-router-dom";
import { Loader } from "../../utils/Atoms";
import { useFetch } from "../../utils/hooks";

function ProjectInfo() {
    const { id } = useParams();
    const { data, isLoading, error } = useFetch(
        "http://localhost:8000/api/projectsInfo/" + id
    );
    console.log(data);
    const { project } = data;

    if (error) {
        return <div>Oups, il y a un problème</div>;
    }

    return isLoading ? (
        <Loader />
    ) : (
        <div>
            <h1>{project && project.title}</h1>
            <p>{project && project.date}</p>
            <p>{project && project.content}</p>
        </div>
    );
}

export default ProjectInfo;
