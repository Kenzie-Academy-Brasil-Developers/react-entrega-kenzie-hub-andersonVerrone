import { StyledHomePageContainer, StyledHomePageHeader, StyledHomePageUserContainer } from "./styles";
import logo from "../../assets/img/logo.svg";
import { StyledButtonExit } from "../../styles/button";
import HeaderHome  from "../../components/HeaderHome";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import TechContainer from "../../components/TechContainer";
import { TechContext } from "../../providers/TechContext";
import ModalEdit from "../../components/ModalEdit";
import ModalCreate from "../../components/ModalCreate";


const HomePage = () => {

    const { userLogout } = useContext(UserContext);
    const { loadTech, modalEditOpen, modalCreateOpen } = useContext(TechContext);
    
    
    useEffect(() => {
        loadTech();
    },[])
 
    return (
        <>
            <StyledHomePageHeader>
                <StyledHomePageContainer>
                    <img src={logo} alt="Logo Kenzie Hub" />
                    <StyledButtonExit onClick={() => {userLogout()}}>
                        Sair
                    </StyledButtonExit>
                </StyledHomePageContainer>
            </StyledHomePageHeader>
            <StyledHomePageUserContainer>
                <HeaderHome />
            </StyledHomePageUserContainer>
            <StyledHomePageContainer>
                <TechContainer />
            </StyledHomePageContainer>
            {modalEditOpen ? <ModalEdit /> : null};
            {modalCreateOpen ? <ModalCreate /> : null}
        </>
    )
}

export default HomePage;