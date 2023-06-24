import { StyledHeaderHome } from "./style";
import { StyledTypography } from "../../styles/typography";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const HeaderHome = () => {

    const { user } = useContext(UserContext);

    return (
        <StyledHeaderHome>
            <StyledTypography typographyStyle="title1">
                Olá, {user.name}
            </StyledTypography>
            <StyledTypography typographyStyle="headlineBold" color="#868E96">
                {user.course_module}
            </StyledTypography>
        </StyledHeaderHome>
    )
}

export default HeaderHome;