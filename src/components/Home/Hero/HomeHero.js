import React from "react";
import styles from "./HomeHero.module.scss"
import NavBar from "../../NavBar";
import decoration from "../../../assets/Decoration.png"
import LogInOut from "../../LogInOut";
const HomeHero = () => {

    return (
        <div className={styles.hero}>
        <LogInOut />
        <NavBar/>
        <div className={styles.hero__wrapper} id='hero'>

            <div className={styles.hero__col}>
            </div>
            <div className={styles.hero__col}>

                <div className={styles.hero__hdl}>
                    Zacznij pomagać! <br />
                    Oddaj niechciane rzeczy w zaufane ręce
                </div>
                <img className={styles.decoration} src={decoration}/>
                <div className={styles.hero__btn__wrapper}>
                    <a className={styles.hero__btn}>
                            ODDAJ<br/>
                            RZECZY
                    </a>
                    <a className={styles.hero__btn}>
                            ZACZNIJ <br />
                            POMAGAĆ
                    </a>
                </div>

            </div>

        </div>
        </div>
    )
}

export default HomeHero