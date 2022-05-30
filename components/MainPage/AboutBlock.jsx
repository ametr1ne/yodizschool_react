import React from 'react';
import photo from '../../public/img/facts_photo.jpg'
import Image from "next/image";
import styles from '../../public/scss/MainPage/AboutBlock.module.scss'

const AboutBlock = () => {
    return (
        <div id="about" className={styles.aboutBlock}>
            <div className="thin-container">
                <h2>Несколько фактов о Yodiz School</h2>
            </div>
            <div className={styles.hide_container + " hide-container"}>
                <Image src={photo} alt="kitchen" className={styles.about__image} priority />
            </div>
            <div className="thin-container">
                <div className={styles.aboutBlock__item}>
                    <p className={styles.aboutBlock__subtitle}>Школа</p>
                    <p className="text-grey">Основная цель Yodiz School — подготовка специалистов в области веб-дизайна,
                        с
                        дальнейшим трудоустройством в Студию Yodiz и компании партнеров</p>
                </div>
                <div className={styles.aboutBlock__item}>
                    <p className={styles.aboutBlock__subtitle}>Студия</p>
                    <p className="text-grey">Yodiz — продуктовая дизайн-студия с собственной аналитикой, веб-разработкой
                        и
                        рекламным
                        продакшеном. Среди наших клиентов — Яндекс, Mail.ru, Сбер и Технониколь</p>
                </div>
                <div className={styles.aboutBlock__item}>
                    <p className={styles.aboutBlock__subtitle}>Преподаватели</p>
                    <p className="text-grey">Преподаватели
                        — действующие специалисты нашей Студии. Знания, которые даются в школе, основаны на ежедневной
                        практике нашей команды</p>
                </div>
            </div>
        </div>
    );
};

export default AboutBlock;