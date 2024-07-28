import { LoginForm } from "../../components/LoginForm";
import logo from "../../assets/logo.svg";
import icon from "../../assets/kenzie-icon.svg";
import styles from "./styles.module.scss";
import { Helmet } from "react-helmet";

export const LoginPage = () => {
    return (
        <>
        <Helmet>
            <title>Entrar na Kenzie Hub</title>
            <link rel="shortcut icon" href={icon} />
        </Helmet>
        <div className={styles.container}>
            <img src={logo} alt="Kenzie Hub" />
            <LoginForm />
        </div>
        </>
    )
}