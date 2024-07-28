import { forwardRef, useState } from "react";
import { FaEye , FaEyeSlash } from "react-icons/fa";
import styles from "./styles.module.scss";


export const InputPassword = forwardRef(({label, errors, ...rest}, ref) => {

    const [password, isPassword] = useState(true)

    return (
        <div className={styles.input__box}>
            <label>{label}</label>
            <div className={styles.input__grid}>
                <input ref={ref} type={password ? "password" : "text"} {...rest}/>
                <button type="button">{password ? (
                    <FaEye size={16} color={"var(--grey-100)"} onClick={() => isPassword(!password)}/>
                ) : (
                   <FaEyeSlash size={16} color={"var(--grey-100)"} onClick={() => isPassword(!password)}/>
                )}
                </button>
            </div>
            {errors ? <p>{errors.message}</p> : null}
        </div>
    )
})