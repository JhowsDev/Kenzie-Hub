import logo from "../../assets/logo.svg";
import icon from "../../assets/kenzie-icon.svg";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../provider/UserContex";
import { Helmet } from "react-helmet";
import { TechList } from "../../components/TechList";
import { FaPlus } from "react-icons/fa";
import { EditTechModal } from "../../components/EditTechModal";
import { CreateTechModal } from "../../components/CreateTechModal/Index";
import { TechContext } from "../../provider/TechContext";

export const DashboardPage = () => {

    const { logoutFunction, user } = useContext(UserContext)
    const { editing, creating, setCreating } = useContext(TechContext)

    return (
        <>
            <Helmet>
                <title>Kenzie Hub</title>
                <link rel="shortcut icon" href={icon} />
            </Helmet>
            <div className={styles.container}>
                <header>
                    <img src={logo} alt="Kenzie Hub" />
                    <button onClick={logoutFunction}>Sair</button>
                </header>
                <section>
                    <div>
                    <h2>{`Olá, ${user.name}`}</h2>
                    <p>{user.course_module}</p>
                    </div>
                </section>
                <main>
                    <div>
                        <h2>Tecnologias</h2>
                        <button onClick={() => setCreating(true)}><FaPlus color="var(--grey-0)"/></button>
                    </div>
                    <TechList/>
                </main>
            </div>
            { editing ? <EditTechModal/> : null}
            { creating ? <CreateTechModal/> : null}
        </>
    )
}