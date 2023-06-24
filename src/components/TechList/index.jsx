import { useContext } from "react";
import { StyledTechList } from "./styles"
import { TechContext } from "../../providers/TechContext";
import TechItem from "../TechItem";
import { StyledTypography } from "../../styles/typography";

const TechList = () => {
        const { tech } = useContext(TechContext);

    return (
        <StyledTechList>
            {tech.map((item)=>(
                <TechItem key={item.id} item={item}>
                    <StyledTypography typographyStyle={"title3"} color="#FFF">
                        {item.title}
                    </StyledTypography>
                    <StyledTypography typographyStyle={"headline"}>
                        {item.status}
                    </StyledTypography>
                </TechItem>
            ))}
        </StyledTechList>
    )
}

export default TechList;