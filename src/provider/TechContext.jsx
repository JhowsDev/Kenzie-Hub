import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContex";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

    const { userTechs, setUsertechs} = useContext(UserContext)

    const [editing, setEditing] = useState(null)

    const [creating, setCreating] = useState(false)

    const notifySecessCreate = () => {
        toast.success("Tecnologia Criada com sucesso!", {
           position:"top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

     const notifyErrorCreate = () => {
        toast.error("Ops! Algo deu errado", {
           position: "top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

    const creatTech = async (formData) => {
        const token = localStorage.getItem("@KenzieHub: userToken")

        try {
            const {data} = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                 },
            })
            setUsertechs([...userTechs, data])
            setCreating(false)
            notifySecessCreate()
        } catch (error) {
            console.log(error)
            notifyErrorCreate()
        }
    }

    const notifySecessDelete = () => {
        toast.success("Tecnologia Excluida!", {
           position:"top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

     const notifyErrorDetete = () => {
        toast.error("Não foi possivél excluir", {
           position: "top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

    const deletTech = async (techId) => {

        const token = localStorage.getItem("@KenzieHub: userToken")
        
        try {
            const {data} = await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                 },
            })

            const newTechList = userTechs.filter(tech => tech.id != techId)
            setUsertechs(newTechList)
            setCreating(false)
            notifySecessDelete()
        } catch (error) {
            console.log(error)
            notifyErrorDetete()
        }
    }

    const notifySecessEditing = () => {
        toast.success(`Tecnologia ${editing.title} alterada com sucesso!`, {
           position:"top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

     const notifyErrorEditing = () => {
        toast.error(`Tecnologia ${editing.title} não foi editada!`, {
           position: "top-right",
           autoClose: 3000,
           theme: "dark",
        })
     }

    const editTech = async (formData) => {
        const token = localStorage.getItem("@KenzieHub: userToken")
        
        try {
            const {data} = await api.put(`/users/techs/${editing.id}`,formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                 },
            })

            const newTechList = userTechs.map(
                tech => {
                    if(tech.id === editing.id) {
                        return data
                    } else {
                        return tech
                    }
                }
            )
            setUsertechs(newTechList)
            notifySecessEditing()
            setEditing(null)
        } catch (error) {
            notifyErrorEditing()
            console.log(error)
        }
    }
    
    return (
        <TechContext.Provider value={{ editing, creating, setEditing, setCreating, creatTech, deletTech, editTech}}>
            {children}
        </TechContext.Provider>
    )
}