import React from "react";
import styles from "./LogInOut.module.scss"
const LogInOut = () => {
    return (
        <div className={styles.btn__wrapper}>
            <button className={styles.btn}>Zaloguj</button>
            <button className={styles.btn}>Załóż konto</button>
        </div>
    )
}

export default LogInOut