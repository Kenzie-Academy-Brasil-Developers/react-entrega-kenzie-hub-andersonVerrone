import { useContext } from "react";
import { StyledTechItem } from "./styles";
import { TechContext } from "../../providers/TechContext";

const TechItem = ({item,children}) => {
    const { openModalEdit } = useContext(TechContext);

    return (
        <StyledTechItem onClick={() => openModalEdit(item)}>
            {children}
        </StyledTechItem>
    )
}

export default TechItem;