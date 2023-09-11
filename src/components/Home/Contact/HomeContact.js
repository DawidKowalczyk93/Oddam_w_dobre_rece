import React from "react";
import styles from "../Contact/HomeContact.module.scss";
import decoration from "../../../assets/Decoration.png";
import contact from "../../../assets/Contactbackground.png";

const HomeContact = () => {

    return (
        <div className='contact' id='contact'>

            <div className={styles.aboutUs} id='aboutUs'>
                <div className={styles.contact__container}>
                    <div className={styles.contact__col}>
                        <img className={styles.img__contact} src={contact}/>
                    </div>
                    <div className={styles.contact__col}>
                        <div className={styles.contact__hdl}>
                            Skontaktuj się z nami
                        </div>
                        <img className={styles.decoration} src={decoration}/>
                        <form className={styles.form__container}>
                            <div className={styles.form__data}>
                                <div className={styles.form__field}>
                                    <label htmlFor='name' className={styles.form__label}>Wpisz swoje imię</label>
                                    <input type="text" className={styles.form__input} id='name' />
                                </div>
                                <div className={styles.form__field}>
                                    <label htmlFor='email' className={styles.form__label}>Wpisz swój email</label>
                                    <input type="text" className={styles.form__input} id='email' />
                                </div>
                            </div>
                            <div className={styles.form__message}>
                                <label htmlFor='message' className={styles.form__label}>Wpisz swoją wiadomość</label>
                                <textarea rows={4} className={styles.form__textarea} id='message' />
                            </div>

                            <button className={styles.form__button}>Wyślij</button>


                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeContact