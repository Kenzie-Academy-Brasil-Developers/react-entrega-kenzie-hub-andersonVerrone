import { StyledHomePageContainer, StyledHomePageHeader, StyledHomePageUserContainer } from "./styles";
import logo from "../../assets/img/logo.svg";
import { StyledButtonExit } from "../../styles/button";
import { StyledTypography } from "../../styles/typography";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const HomePage = ({user}) => {

    return (
        <>
            <StyledHomePageHeader>
                <StyledHomePageContainer>
                    <img src={logo} alt="Logo Kenzie Hub" />
                    <Link to={"/"} onClick={() => {localStorage.clear()}}> 
                        <StyledButtonExit>
                            Sair
                        </StyledButtonExit>
                    </Link>
                </StyledHomePageContainer>
            </StyledHomePageHeader>
            <StyledHomePageUserContainer>
                <StyledHomePageContainer>
                    <StyledTypography typographyStyle="title1">
                        Olá, {user[0].name}
                    </StyledTypography>
                    <StyledTypography typographyStyle="headlineBold" color="#868E96">
                        {user[0].course_module}
                    </StyledTypography>
                </StyledHomePageContainer>
            </StyledHomePageUserContainer>
            <StyledHomePageContainer>

            </StyledHomePageContainer>
        </>
    )
}

export default HomePage;