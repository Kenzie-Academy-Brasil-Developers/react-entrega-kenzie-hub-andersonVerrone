import { StyledModalCreate } from "./styles";
import { StyledTypography } from "../../styles/typography";
import { MdClose } from 'react-icons/md';
import { useContext, useState } from "react";
import { TechContext } from "../../providers/TechContext";
import Input from "../Input";
import Select from "../Select";
import { StyledButtonMain } from "../../styles/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { modalCreateSchema } from "./modalCreateSchema";


const ModalCreate = () => {

    const [ isLoading,setIsLoading] = useState(false);
    const { closeModalCreate, status, createTech } = useContext(TechContext);
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: zodResolver(modalCreateSchema),
    });

    const submit = (formData) => {
        createTech(formData,setIsLoading);
    }
    return (
        <StyledModalCreate role="dialog">
            <div>
                <header>
                    <div>
                        <StyledTypography typographyStyle="title3">
                            Cadastrar Tecnologia
                        </StyledTypography>
                        <MdClose size={20} color="#868E96" onClick={() => closeModalCreate()} />
                    </div>
                </header>
                <form onSubmit={handleSubmit(submit)}>
                    <Input 
                        label="Nome do projeto" 
                        id="name" 
                        placeholder="Digite a tecnologia"
                        helper={errors.title ? <p>{errors.title.message}</p> : null}
                        {...register("title")} 
                    />
                    <Select 
                        label="Selecionar status" 
                        id="status" 
                        optionsItem={status} 
                        helper={errors.status ? <p>{errors.status.message}</p> : null}
                        {...register("status")}
                    />
                    <StyledButtonMain disabled={isLoading}>
                        {isLoading ? "Cadastrando Tecnologia..." : "Cadastrar Tecnologia"}
                    </StyledButtonMain>
                </form>
            </div>
        </StyledModalCreate>
    )
}

export default ModalCreate;
