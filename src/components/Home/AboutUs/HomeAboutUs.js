import React from "react";
import styles from "./HomeAboutUs.module.scss"
import decoration from "../../../assets/Decoration.png";
import people from "../../../assets/People.png";

const HomeAboutUs = () => {

    return (
        <div className={styles.aboutUs} id='aboutUs'>
            <div className={styles.info__container}>
                <div className={styles.info__col}>
                    <div className={styles.info__hdl}>
                        O nas
                    </div>
                    <img className={styles.decoration} src={decoration}/>
                    <div className={styles.info__text}>
                        Nori grape silver beet broccoli kombu beet <br/>
                        greens fava bean potato quandong celery. <br/>
                        Bunya nuts black-eyed pea prairie turnip leek <br/>
                        lentil turnip greens parsnip.
                    </div>
                </div>
                <div className={styles.info__col}>
                    <img className={styles.img__people} src={people}/>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutUs