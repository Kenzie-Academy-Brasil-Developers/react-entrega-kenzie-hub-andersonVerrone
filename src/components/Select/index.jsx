import { forwardRef } from "react";
import { StyledSelect } from "./styles";

const Select = forwardRef(({label, id, placeholder, type, helper,optionsItem, ...rest}, ref) => {
    return (
        <StyledSelect>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <select
                id={id} 
                name={id}
                ref={ref}
                {...rest} 
            >
                <option value="" className="placeholderSelect">Selecione o Módulo</option>
                {optionsItem.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
            {helper ? <p>{helper}</p> : null}
        </StyledSelect>
    )
})

export default Select;