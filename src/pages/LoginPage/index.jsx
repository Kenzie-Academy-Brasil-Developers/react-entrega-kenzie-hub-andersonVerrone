import LoginForm from "../../components/LoginForm";
import logo from "../../assets/img/logo.svg"
import { StyledLoginPage } from "./styles";

const LoginPage = ({setUser}) => {
    return (
        <StyledLoginPage>
            <img src={logo} alt="Logo da Kenzie Hub" />
            <LoginForm setUser={setUser} />
        </StyledLoginPage>
        
    )
}

export default LoginPage;