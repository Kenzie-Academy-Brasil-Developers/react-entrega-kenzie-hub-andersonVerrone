import Input from "../Input";
import InputPassword from "../InputPassword";
import { useForm } from "react-hook-form";
import { StyledLoginForm } from "./styles";
import { StyledTypography } from "../../styles/typography";
import { StyledButtonMain } from "../../styles/button";
import { StyledButtonSecond } from "../../styles/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = ()=>{
    const[isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(loginFormSchema),
    });
    const navigate = useNavigate();

    const submit = async (formData) => {
        setIsLoading(true);
        try {
            const response = await api.post("/sessions",formData);
            console.log(response);
            toast.success("Login realizado com sucesso!",{
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            setIsLoading(false);
            reset();
        }catch (error) {
            toast.error("Ops! Algo deu errado",{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            setIsLoading(false);
        } finally {
            setTimeout(() => {navigate("/")},2000)
        }
    }

    return (
        <>
            <StyledLoginForm onSubmit={handleSubmit(submit)}>
                <StyledTypography typographyStyle="title1">
                    Login
                </StyledTypography>
                <Input 
                    label="Email" 
                    id="email" 
                    placeholder="Digite o seu email" 
                    type="email"
                    helper={errors.email ? <p>{errors.email.message}</p> : null}
                    {...register("email")}
                />
                <InputPassword
                    label="Senha"
                    id="password"
                    placeholder="Digite a sua senha"
                    helper={errors.password ? <p>{errors.password.message}</p> : null}
                    {...register("password")}
                />
                <StyledButtonMain disabled={isLoading}>
                    {isLoading ? "Logando..." : "Entrar"}
                </StyledButtonMain>
                <StyledTypography typographyStyle="headlineBold" color="#868E96">
                    Ainda não possui uma conta?
                </StyledTypography>
                <Link to="/register">
                    <StyledButtonSecond type="button">Cadastre-se</StyledButtonSecond>
                </Link>
            </StyledLoginForm>
            <ToastContainer />
        </>
    )
}

export default LoginForm;