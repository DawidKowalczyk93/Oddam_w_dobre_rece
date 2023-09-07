import React from "react";
import styles from "./WhatIsAbout.module.scss"
import decoration from "../../../assets/Decoration.png"
import arrows from "../../../assets/arrows.png"
import bag from "../../../assets/bag.png"
import oculus from "../../../assets/oculus.png"
import tshirt from "../../../assets/tshirt.png"
const HomeWhatIsAbout = () => {

    return (
        <div className={styles.whatIsAbout} id='whatIsAbout'>
            <div className={styles.data__wrapper}>
                <div className={styles.data__col}>
                    <div className={styles.data__hdl}>
                        10
                    </div>
                    <div className={styles.data__lead}>
                        ODDANYCH WORKÓW
                    </div>

                    <div className={styles.data__text}>
                        Lorem ipsum dolor sit amet, consectetur adipisc<br/>
                        Pellentesque vel enim a elit viverra elementuma.<br/>
                        Aliquam erat volutpat.
                    </div>
                </div>
                <div className={styles.data__col}>
                    <div className={styles.data__hdl}>
                        5
                    </div>
                    <div className={styles.data__lead}>
                        WSPARTYCH ORGANIZACJI
                    </div>
                    <div className={styles.data__text}>
                        Lorem ipsum dolor sit amet, consectetur adipisc<br/>
                        Pellentesque vel enim a elit viverra elementuma.<br/>
                        Aliquam erat volutpat.
                    </div>
                </div>
                <div className={styles.data__col}>
                    <div className={styles.data__hdl}>
                        7
                    </div>
                    <div className={styles.data__lead}>
                        ZORGANIZOWANY ZBIÓREK
                    </div>
                    <div className={styles.data__text}>
                        Lorem ipsum dolor sit amet, consectetur adipisc <br/>
                        Pellentesque vel enim a elit viverra elementuma.<br/>
                        Aliquam erat volutpat.
                    </div>
                </div>
            </div>
            <div className={styles.steps__hdl__wrapper}>
                <div className={styles.steps__hdl}>
                    Wystarczą 4 proste kroki
                </div>
                <img className={styles.decoration} src={decoration}/>
            </div>

            <div className={styles.steps__col__wrapper}>
                <div className={styles.steps__col}>
                    <img className={styles.icon} src={tshirt}/>
                    <div className={styles.steps__lead}>
                        Wybierz rzeczy
                    </div>
                    <div className={styles.steps__text}>
                        <hr/>
                        ubrania, zabawki, <br/>
                        sprzęt i inne
                    </div>
                </div>
                <div className={styles.steps__col}>
                    <img className={styles.icon} src={bag}/>
                    <div className={styles.steps__lead}>
                        Spakuj je
                    </div>
                    <div className={styles.steps__text}>
                        <hr/>
                        skorzystaj z <br/>
                        worków na śmieci
                    </div>
                </div>
                <div className={styles.steps__col}>
                    <img className={styles.icon} src={oculus}/>
                    <div className={styles.steps__lead}>
                        Zdecyduj komu <br/>
                        chcesz pomóc
                    </div>
                    <div className={styles.steps__text}>
                        <hr/>
                        wybierz zaufane <br/>
                        miejsce
                    </div>
                </div>
                <div className={styles.steps__col}>
                    <img className={styles.icon} src={arrows}/>
                    <div className={styles.steps__lead}>
                        Zamów kuriera
                    </div>
                    <div className={styles.steps__text}>
                        <hr/>
                        kurier przyjedzie  <br/>
                        w dogodnym terminie
                    </div>
                </div>

            </div>
            <div className={styles.btn__wrapper}>
                <a className={styles.steps__btn}>
                    ODDAJ<br/>
                    RZECZY
                </a>
            </div>

        </div>
    )
}

export default HomeWhatIsAbout