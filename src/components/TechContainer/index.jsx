import { StyledTechContainer } from "./styles";
import { StyledTypography } from "../../styles/typography";
import plusBtn from "../../assets/img/button-plus.svg";
import TechList from "../TechList";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

const TechContainer = () => {

    const { openModalCreate } = useContext(TechContext);

    return (
        <StyledTechContainer>
            <div>
                <StyledTypography typographyStyle="headlineBold">
                    Tecnologias
                </StyledTypography>
                <img src={plusBtn} onClick={() => openModalCreate()} />
            </div>
            <TechList />
        </StyledTechContainer>
    )
}

export default TechContainer;