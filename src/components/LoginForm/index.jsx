import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema } from "./FormLoginSchema";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { useContext } from "react";
import { UserContext } from "../../provider/UserContex";

export const LoginForm = () => {

    const { loginFunction } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(formLoginSchema)
    })

    const submitForm = (formData) => {
        loginFunction(formData)
    }
    
    return (
        <>
        <form onSubmit={handleSubmit(submitForm)} className={styles.formLogin}>
            <h2>Login</h2>
            <Input label="Email" errors={errors.email} placeholder="Digite aqui seu email" type="email" {...register("email")}/>
            <InputPassword label="Senha" errors={errors.password} placeholder="Digite aqui sua senha"{...register("password")}/>
            <button className={styles.loginButton}>Entrar</button>

            <p>Ainda não possui uma conta?</p>
            <Link className={styles.registerButton} to={"/register"}>Cadastre-se</Link>
        </form>   
        </>

    )
}

