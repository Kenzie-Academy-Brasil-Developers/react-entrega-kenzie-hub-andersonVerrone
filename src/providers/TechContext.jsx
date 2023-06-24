import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});


export const TechProvider = ({ children }) => {
    const [tech, setTech] = useState([]);
    const [status, setStatus] = useState([]);
    const [modalEditOpen, setModalEditOpen] = useState(false);
    const [modalCreateOpen, setModalCreateOpen] = useState(false);
    const [techTarget,setTechTarget] = useState(null);
    const [idTarget,setIdTarget] =useState(null);
    const token = localStorage.getItem("@TOKEN");

    const { toastySuccess, toastyError } = useContext(UserContext);

    useEffect(() => {
        setStatus([
            "Iniciante",
            "Intermediário",
            "Avançado"
        ])


    }, [])

    const closeModalEdit = () => {
        setModalEditOpen(false);
        setIdTarget(null);
        setTechTarget(null);
    }

    const closeModalCreate = () => {
        setModalCreateOpen(false);
    }

    const openModalEdit = (item) => {
        setIdTarget(item.id);
        setTechTarget(item.title);
        setModalEditOpen(true);
    }

    const openModalCreate = () => {
        setModalCreateOpen(true);
    }

    const createTech = async (formData, setIsLoading) => {
        try {
            setIsLoading(true);
            const {data} = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            loadTech();
            toastySuccess("Tecnologia cadastrada com sucesso!");
            setModalCreateOpen(false);
        } catch (error) {
            toastyError("Ops! Algum erro ao cadastrar a tecnologia.");
        } finally {
            setIsLoading(false);
        }
    }


    const editTech =  async (formData, setIsLoadingForm) => {
        try {
            setIsLoadingForm(true);
            const {data} = await api.put(`/users/techs/${idTarget}`,formData,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            loadTech();
            toastySuccess("Tecnologia atualizada com sucesso!");
            setModalEditOpen(false);
        } catch (error) {
            toastyError("Ops! Algum erro ao atualizar a tecnologia.");
        } finally {
            setIsLoadingForm(false);
        }
    }

    const deleteTech = async (setIsLoadingDelete) => {
        try {
            setIsLoadingDelete(true);
            const { data } = await api.delete(`/users/techs/${idTarget}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            loadTech();
            toastySuccess("Tecnologia deletada com sucesso!");
            setModalEditOpen(false);
        } catch (error) {
            toastyError("Ops! Algum erro ao deletar a tecnologia.");
        } finally {
            setIsLoadingDelete(false);
        }
    }
    
    
    const loadTech = async () => {
        try {
            const {data} = await api.get("/profile",{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTech(data.techs);
        } catch (error) {
            toastyError("Ops! Aconteceu algum erro!");
        }
    }

    return (
        <TechContext.Provider value={{
            tech,
            status, 
            modalEditOpen, 
            modalCreateOpen, 
            techTarget,
            editTech,
            createTech,
            deleteTech, 
            openModalEdit, 
            openModalCreate, 
            closeModalCreate, 
            closeModalEdit, 
            setModalEditOpen, 
            loadTech
            }}>
            {children}
        </TechContext.Provider>
    )
}