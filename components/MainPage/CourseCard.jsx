import React from 'react';
import styles from '../../public/scss/MainPage/CourseCard.module.scss'
import Image from "next/image";
import dima_round from '../../public/img/dima_little.png'
import lika_round from '../../public/img/lika_little.png'
import lesha_round from '../../public/img/lecha_little.png'
import BlackButton from "../UI/BlackButton";

const CourseCard = ({courseName, startTime, price, duration, courseLink}) => {
    return (
        <div className={styles.coursesBlock__card + " cards-container__card" }>
            <div className={styles.card__teachers}>
                <Image
                    src={dima_round}
                    alt="dima"
                />
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
                width={'100%'}
            >
                Подробнее о курсе
            </BlackButton>
        </div>
    );
};

export default CourseCard;