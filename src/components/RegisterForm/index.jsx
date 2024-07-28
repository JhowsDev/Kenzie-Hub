import { useForm } from "react-hook-form";
import { Input } from "../Input";
import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema } from "./FormSchema";
import { InputPassword } from "../InputPassword/index.jsx";
import { useContext } from "react";
import { UserContext } from "../../provider/UserContex.jsx";

export const RegisterForm = () => {

    const { registerFunction } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(formRegisterSchema)
    })
    
    const submitForm = (formData) => {
        registerFunction(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)} className={styles.formRegister}>
                <h2>Crie sua conta</h2>
                <p>Rapido e grátis, vamos nessa</p>
                <Input label="Nome" errors={errors.name} placeholder="Digite aqui seu nome" type="text" {...register("name")}/>

                <Input label="Email"  errors={errors.email} placeholder="Digite aqui seu email" type="email" {...register("email")}/>

                <InputPassword label="Senha"  errors={errors.password} placeholder="Digite aqui sua senha" {...register("password")}/>

                <InputPassword label="Conformar Senha"  errors={errors.confirmPassword} placeholder="Digite novamente sua senha" {...register("confirmPassword")}/>

                <Input label="Bio"  errors={errors.bio} placeholder="Fale sobre você" type="text" {...register("bio")}/>

                <Input label="Contato"  errors={errors.contact} placeholder="Opção de contato" type="text" {...register("contact")}/>

                <div>
                    <label>Selecionar módulo</label>
                    <select {...register("course_module")}>
                        <option value="">Selecione o Módulo</option>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                    </select>
                    {errors.course_module ? <p>{errors.course_module.message}</p> : null}
                </div>
              
                <button className={styles.registerButton}>Cadastrar</button>
            </form>
        </div>
    )
}