import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import InstagramLogoDark from "../../asset/logo_instagram_dark.svg";
import InstagramLogoLight from "../../asset/logo_instagram_light.svg";
import GithubLogoDark from "../../asset/logo_github_dark.svg";
import GithubLogoLight from "../../asset/logo_github_light.svg";
import LinkedinLogoDark from "../../asset/logo_linkedin_dark.svg";
import LinkedinLogoLight from "../../asset/logo_linkedin_light.svg";

const StyledFooter = styled.footer``;

const MainContainer = styled.div`
    display: flex;

    & > div,
    & > nav {
        display: flex;
        flex-direction: column;
        width: 300px;
    }

    & #instagram {
        padding-left: 35px;
        display: block;
        background: url(${(props) =>
                props.theme === "light"
                    ? InstagramLogoDark
                    : InstagramLogoLight})
            no-repeat 3px;
        background-size: 30px;
        vertical-align: center;
    }

    & #github {
        padding-left: 35px;
        display: block;
        background: url(${(props) =>
                props.theme === "light" ? GithubLogoDark : GithubLogoLight})
            no-repeat 3px;
        background-size: 30px;
    }

    & #linkedin {
        padding-left: 35px;
        display: block;
        background: url(${(props) =>
                props.theme === "light" ? LinkedinLogoDark : LinkedinLogoLight})
            no-repeat 3px;
        background-size: 30px;
    }
`;

const Credits = styled.div`
    margin: auto;
    text-align: center;
`;

const StyledContact = styled.div``;

const StyledLink = styled(Link)`
    padding: 10px;
    text-decoration: none;
    color: ${(props) => props.thememode.text};
`;

const StyledNavbar = styled.nav``;

function Footer() {
    const { theme, themeMode } = useContext(ThemeContext);
    return (
        <StyledFooter>
            <MainContainer theme={theme}>
                <StyledContact>
                    <h2>Contact</h2>
                    <p>Une question ? Contactez-moi !</p>
                    <form>
                        <input></input>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                </StyledContact>
                <StyledNavbar>
                    <h2>Navigation</h2>
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
                <div>
                    <h2>Réseaux</h2>
                    <StyledLink
                        to="https://instagram.com"
                        thememode={themeMode}
                        id="instagram"
                    >
                        Instagram
                    </StyledLink>
                    <StyledLink
                        to="https://linkedin.com"
                        thememode={themeMode}
                        id="linkedin"
                    >
                        LinkedIn
                    </StyledLink>
                    <StyledLink
                        to="https://github.com"
                        thememode={themeMode}
                        id="github"
                    >
                        GitHub
                    </StyledLink>
                </div>
            </MainContainer>
            <Credits>Quentin Rollet © 2023 - Tous droits réservés.</Credits>
        </StyledFooter>
    );
}

export default Footer;
