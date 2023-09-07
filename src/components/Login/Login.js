import React from "react";
import styles from "./Login.module.scss"
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div className={styles.login__container}>
            <Link to="/">
                <div className={styles.login__hdl}>
                    Zaloguj
                </div>
            </Link>

        </div>
    )
}

export default Login