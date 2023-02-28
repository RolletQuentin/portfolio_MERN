import styled from "styled-components";
import MyPhoto from "../../asset/photo_quentin.JPG";
import DatacenterPhoto from "../../asset/datacenter_server.jpg";
import GraphicalTabletPhoto from "../../asset/tablette_graphique.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
    background-color: ${(props) => props.thememode.backgroundLight};
    border-radius: 10px;
    margin: 50px;

    & > a {
        text-decoration: none;
        color: ${(props) => props.thememode.text};
        display: flex;
        text-align: justify;
        margin: 50px;
        padding: 50px;
    }

    & > a > div {
        padding: 50px;
    }
`;

const ImageContainer = styled.img`
    width: 300px;
    height: 300px;
    border: black 3px solid;
    border-radius: 50%;
    flex-shrink: 0;
`;

function Home() {
    const { themeMode } = useContext(ThemeContext);
    return (
        <HomeContainer thememode={themeMode}>
            <Link to="aboutMe">
                <ImageContainer src={MyPhoto} />
                <div>
                    <h1>À propos de moi</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat, dignissimos nemo. Veniam porro soluta eligendi,
                        dolor qui pariatur culpa enim nam illum asperiores
                        commodi, ut totam alias rem itaque possimus! Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Cum
                        tenetur assumenda incidunt alias repudiandae unde nam
                        odit harum obcaecati autem voluptatum laboriosam illo,
                        error architecto maiores porro id hic placeat?
                    </p>
                </div>
            </Link>
            <Link to="portfolioInfo">
                <div>
                    <h1>Mes projets informatique</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat, dignissimos nemo. Veniam porro soluta eligendi,
                        dolor qui pariatur culpa enim nam illum asperiores
                        commodi, ut totam alias rem itaque possimus! Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Cum
                        tenetur assumenda incidunt alias repudiandae unde nam
                        odit harum obcaecati autem voluptatum laboriosam illo,
                        error architecto maiores porro id hic placeat?
                    </p>
                </div>
                <ImageContainer src={DatacenterPhoto} />
            </Link>
            <Link></Link>
            <Link to="portfolioArt">
                <ImageContainer src={GraphicalTabletPhoto} />
                <div>
                    <h1>Mes oeuvres d'arts</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat, dignissimos nemo. Veniam porro soluta eligendi,
                        dolor qui pariatur culpa enim nam illum asperiores
                        commodi, ut totam alias rem itaque possimus! Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Cum
                        tenetur assumenda incidunt alias repudiandae unde nam
                        odit harum obcaecati autem voluptatum laboriosam illo,
                        error architecto maiores porro id hic placeat?
                    </p>
                </div>
            </Link>
            <Link></Link>
        </HomeContainer>
    );
}

export default Home;
