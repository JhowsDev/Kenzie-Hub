import { useContext } from "react"
import { TechCard } from "./TechCard"
import styles from "./styles.module.scss"
import { UserContext } from "../../provider/UserContex"

export const TechList = () => {

    const { userTechs } = useContext(UserContext)
    
    return(
        <>
        {
            userTechs.length > 0 ? (
                <ul className={styles.techContainer}>
                    {userTechs.map(tech => <TechCard key={tech.id} tech={tech}/>)}
                </ul>
            ) : null
        }
        </>
    )
}