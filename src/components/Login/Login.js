import React, {useEffect, useState} from "react";
import styles from "./Login.module.scss"
import {Link as RouterLink} from 'react-router-dom';
import contact from "../../assets/Contactbackground.png";
import decoration from "../../assets/Decoration.png";
import NavBar from "../Global/NavBar";
import LogInOut from "../Global/LogInOut";
import  auth  from "../../Firebase"
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authUser, setAuthUser] = useState(null);

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((useCredential) => {
                console.log(useCredential);
            }).catch((error) => {
                console.log(error);
        })
    }

    const userSignOut = (e) => {
        signOut(auth).then(() => {
                console.log('wylogowano pomyślnie');
            }).catch((error) => {
            console.log(error);
        })
    }


    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user)
                console.log(authUser);
            } else {
                setAuthUser(null);
            }
        })
    }, []);

    return (

    <div className={styles.wrapper}>
        <nav className={styles.login__nav}>
            <LogInOut/>
            <NavBar/>
        </nav>
        { authUser
            ? <>
                <h2>{`zalogowano  ${authUser.email}`}</h2>
                <button
                    onClick={userSignOut}
                >Wyloguj</button>
            </>
            :
            <div className={styles.login__container}>
                <div className={styles.login__col}>
                    <div className={styles.login__hdl}>
                        Zaloguj się
                    </div>
                    <img className={styles.decoration} src={decoration}/>
                    <form className={styles.form__container} onSubmit={signIn}>
                        <div className={styles.form__data}>
                            <div className={styles.form__field}>
                                <label htmlFor='email' className={styles.form__label}>Email</label>
                                <input
                                    type="text"
                                    className={styles.form__input}
                                    id='email'
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                            </div>
                            <div className={styles.form__field}>
                                <label htmlFor='password' className={styles.form__label}>Hasło</label>
                                <input
                                    type="text"
                                    className={styles.form__input}
                                    id='password'
                                    value={password}
                                    onChange={ e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={styles.form__button__wrapper}>
                            <RouterLink to='/signup'>
                                <button className={styles.form__button}>
                                    Załóż Konto
                                </button>
                            </RouterLink>

                        <button
                            className={styles.form__button}
                            type='submit'
                        >Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </div>

        }
    </div>

    )
}

export default Login