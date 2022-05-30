import React from 'react';
import styles from '../../public/scss/MainPage/CourseCard.module.scss'
import Image from "next/image"
import BlackButton from "../UI/BlackButton"

const CourseCard = ({courseName, startTime, price, duration, courseLink, icons}) => {

    const Icons = () => {
        return (
            icons.map((elem, i) => (
                <Image key={i} src={elem} className={styles.image}/>
            ))
        )
    }

    return (
        <div className={styles.coursesBlock__card + " cards_container__card"}>
            <div className={styles.card__teachers}>

                <Icons/>

            </div>
            <div className={styles.card__content}>
                <h2>{courseName}</h2>

                <div className={styles.card__info}>

                    <div className={styles.info__item}>
                        <p className="text-grey">Когда старт?</p>
                        <p>{startTime}</p>
                    </div>

                    <div className={styles.info__item}>
                        <p className="text-grey">Сколько стоит?</p>
                        <p>{price}</p>
                    </div>

                    <div className={styles.info__item}>
                        <p className="text-grey">Сколько длится?</p>
                        <p>{duration}</p>
                    </div>

                </div>
            </div>
            <BlackButton
                courseLink={courseLink}
            >
                Подробнее о курсе
            </BlackButton>
        </div>
    );
};

export default CourseCard;