import React from "react";
import styles from "./LogInOut.module.scss"
import {Link} from 'react-router-dom';
const LogInOut = () => {
    return (
        <div className={styles.btn__wrapper}>
            <Link to="/login">
                <button className={styles.btn}>
                    Zaloguj
                </button>
            </Link>
            <button className={styles.btn}>Załóż konto</button>
        </div>
    )
}

export default LogInOut