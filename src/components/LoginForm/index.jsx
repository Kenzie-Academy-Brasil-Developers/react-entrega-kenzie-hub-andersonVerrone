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
import { toast } from "react-toastify";

const LoginForm = ({setUser})=>{
    const[isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: zodResolver(loginFormSchema),
    });
    const navigate = useNavigate();

    const submit = async (formData) => {
        setIsLoading(true);
        try {
          const response = await api.post("/sessions", formData);
          toast.success("Conta criada com sucesso!", {
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
          localStorage.setItem("@TOKEN", response.data.token);
          localStorage.setItem("@USERID", response.data.user.id);
          setUser([response.data.user])
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        } catch (error) {
            console.log(error);
          toast.error("Ops! Algo deu errado", {
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
        }
      };



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
        </>
    )
}

export default LoginForm;