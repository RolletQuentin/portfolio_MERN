import styled from "styled-components";
import PropTypes from "prop-types";
import DefaultPicture from "../../asset/datacenter_server.jpg";
import { Link } from "react-router-dom";

const CardWrapper = styled(Link)`
    display: flex;
    background-color: ${(props) => props.thememode.backgroundLight};
    color: ${(props) => props.thememode.text};
    text-decoration: none;
    transition: 200ms;
    width: 100%;
    height: 150px;
    overflow: hidden;
    border-radius: 10px;
    margin: 20px 0px 20px 0px;

    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`;

const CardImage = styled.img`
    width: 150px;
    height: 150px;
`;

const CardText = styled.div`
    padding: 10px;
`;

function Card({ id, title, description, coverPicture, themeMode }) {
    return (
        <CardWrapper thememode={themeMode} to={id}>
            <CardImage src={coverPicture} />
            <CardText>
                <h1>{title}</h1>
                <p>{description}</p>
            </CardText>
        </CardWrapper>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coverPicture: PropTypes.string.isRequired,
};

Card.defaultProps = {
    picture: DefaultPicture,
};

export default Card;
