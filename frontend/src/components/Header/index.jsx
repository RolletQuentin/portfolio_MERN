import styled from "styled-components";
import { Link } from "react-router-dom";
import DarkLightButton from "../DarkLightButton";
import DarKLogo from "../../asset/logo_dark.png";
import LightLogo from "../../asset/logo_light.png";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledLogo = styled.img`
    width: 200px;
    height: 200px;
`;

const StyledLink = styled(Link)`
    padding: 10px;
    text-decoration: none;
    color: ${(props) => props.thememode.text};
`;

const StyledNavbar = styled.nav``;

const StyledOptionsButton = styled.div`
    padding: 10px;
`;

function Header() {
    const { theme, themeMode } = useContext(ThemeContext);
    return (
        <StyledHeader>
            {theme === "light" ? (
                <StyledLogo src={LightLogo} />
            ) : (
                <StyledLogo src={DarKLogo} />
            )}
            <StyledNavbar>
                <StyledLink to="/" thememode={themeMode}>
                    Accueil
                </StyledLink>
                <StyledLink to="portfolioInfo" thememode={themeMode}>
                    Portfolio Info
                </StyledLink>
                <StyledLink to="portfolioArt" thememode={themeMode}>
                    Portfolio Art
                </StyledLink>
                <StyledLink to="formation" thememode={themeMode}>
                    Formations
                </StyledLink>
                <StyledLink to="aboutMe" thememode={themeMode}>
                    À propos
                </StyledLink>
            </StyledNavbar>
            <StyledOptionsButton>
                <DarkLightButton />
            </StyledOptionsButton>
        </StyledHeader>
    );
}

export default Header;
