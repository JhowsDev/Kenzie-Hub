import { ImPencil } from "react-icons/im";
import { HiTrash } from "react-icons/hi2";
import { useContext } from "react";
import { TechContext } from "../../../provider/TechContext";
import styles from "./styles.module.scss"

export const TechCard = ({ tech }) => {

    const { setEditing, deletTech } = useContext(TechContext)

    return(
        <>
            <li className={styles.techContainer}>
                <div className={styles.titleDiv}>
                    <h3>{tech.title}</h3>
                    <p>{tech.status}</p>
                </div>
                <div className={styles.menuDiv}>
                    <button onClick={() => setEditing(tech)}><ImPencil size={12} color="var(--grey-0)"/></button>
                    <button onClick={() => deletTech(tech.id)}><HiTrash size={12} color="var(--grey-0)"/></button>
                </div>
            </li>
        </>
    )
}