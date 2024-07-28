import { MdClose } from "react-icons/md";
import styles from "./styles.module.scss";
import { TechContext } from "../../provider/TechContext";
import { useContext } from "react";
import { FormEditTechSchema } from "./FormEditTechSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const EditTechModal = () => {

    const { editing, setEditing, editTech } = useContext(TechContext)

    const { register, handleSubmit, formState: { errors }} = useForm({
        values: {
            status: editing.status,
            title: editing.title,
        },
        resolver: zodResolver(FormEditTechSchema),
    })

    const submitForm = (formData) => {
        editTech(formData)
    }

    return(
    <>
        <div className={styles.container} onClick={(e) => {
            if(e.target.className === styles.container) {
                setEditing(null)
            }
        }}>
        <div role="dialog" className={styles.modal}>
            <header>
                <h2>Tecnologia Detalhes</h2>
                <button aria-label="close" title="Fechar" onClick={() => setEditing(null)} type="button">
                    <MdClose size={21} />
                </button>
            </header>
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <label>Nome</label>
                    <input type="text" placeholder="Digite aqui a tecnologia" {...register("title")} disabled/>
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