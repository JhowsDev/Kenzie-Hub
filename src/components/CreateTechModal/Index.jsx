import { MdClose } from "react-icons/md";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { TechContext } from "../../provider/TechContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormCreateTechSchema } from "./FormCreateTechSchema";

export const CreateTechModal = () => {

    const { setCreating, creatTech } = useContext(TechContext)

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(FormCreateTechSchema)
    })

    const submitForm = (formData) => {
        creatTech(formData)
    }

    return(
        <>
        <div className={styles.container} onClick={(e) => {
            if(e.target.className === styles.container) {
                setCreating(false)
            }
        }}>
        <div role="dialog" className={styles.modal}>
            <header>
                <h2>Cadastrar Tecnologia</h2>
                <button aria-label="close" title="Fechar" onClick={() => setCreating(false)} type="button">
                    <MdClose size={21}/>
                </button>
            </header>
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <label>Nome</label>
                    <input type="text" placeholder="Digite aqui a tecnologia" {...register("title")}/>
                    {errors.title ? <p>{errors.title.message}</p> : null}
                </div>
                <div>
                    <label>Status</label>
                    <select {...register("status")}>
                        <option value="">Determine um Nível</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    {errors.status ? <p>{errors.status.message}</p> : null}
                </div>
                <button>Salvar alterações</button>
            </form>
         </div>
      </div>
    </>
    )
}