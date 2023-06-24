import { useContext, useState } from "react";
import { StyledTypography } from "../../styles/typography";
import Input from "../Input";
import Select from "../Select";
import { StyledModalEdit } from "./styles";
import { MdClose } from 'react-icons/md';
import { TechContext } from "../../providers/TechContext";
import { StyledButtonMainNegative, StyledButtonSecond } from "../../styles/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { modalEditSchema } from "./modalEditSchema";

const ModalEdit = () => {

    const [ isLoadingForm, setIsLoadingFrom] = useState(false)
    const [ isLoadingdelete, setIsLoadingdelete] = useState(false)
    const { status, closeModalEdit, techTarget, editTech, deleteTech } = useContext(TechContext);
    const { register, handleSubmit, formState: {errors} } =useForm({
        resolver: zodResolver(modalEditSchema),
    });

    const submit = (formData) => {
        editTech(formData, setIsLoadingFrom);
    }

    return (
        <StyledModalEdit role="dialog">
            <div>
                <header>
                    <div>
                        <StyledTypography typographyStyle="title3">
                            Tecnologia Detalhes
                        </StyledTypography>
                        <MdClose size={20} color="#868E96" onClick={() => closeModalEdit()} />
                    </div>
                </header>
                <form onSubmit={handleSubmit(submit)}>
                    <Input 
                        label="Nome do projeto" 
                        id="name" 
                        value={techTarget}
                        disabled
                    />
                    <Select 
                        label="Status" 
                        id="status" 
                        optionsItem={status}
                        helper={errors.status ? <p>{errors.status.message}</p> : null}
                        {...register("status")} 
                    />
                    <div className="btnContainer">
                        <StyledButtonMainNegative className="negative" type="submit" disabled={(isLoadingForm||isLoadingdelete)?true:false}>
                            {isLoadingForm ? "Salvando..." : "Salvar alterações"}
                        </StyledButtonMainNegative>
                        < StyledButtonSecond type="button" disabled={(isLoadingForm||isLoadingdelete)?true:false} onClick={() => deleteTech(setIsLoadingdelete)}>
                           {isLoadingdelete ? "Excluindo..." : " Excluir"}
                        </StyledButtonSecond>
                    </div>
                </form>
            </div>
        </StyledModalEdit>
    )
}

export default ModalEdit;