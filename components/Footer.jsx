import React from 'react';
import styles from '../public/scss/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <div className={styles.footer__mail}>
                    <a href="mailto:yes@yodiz.ru">yes@yodiz.ru</a>
                    <div className={styles.footer__tooltip}>Yes, Yodiz!</div>
                </div>
                <div className={styles.footer__links}>
                    <a target="_blank" href="https://vk.com/yodiz">Вконтакте</a>
                    <a target="_blank" href="https://www.facebook.com/yodizstudio">Facebook</a>
                    <a target="_blank" href="https://www.instagram.com/yodizstudio/">Instagram</a>
                    <a target="_blank" href="https://dribbble.com/yodiz">Dribbble</a>
                    <a target="_blank" href="https://www.behance.net/yodiz">Behance</a>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <div className={styles.footer__adress}>
                    <p>ООО «Диджитал Продакшн»</p>
                    <a href="tel:+79225105500">+7 922 510 55 00</a>
                </div>
                <div className={styles.footer__docs}>
                    <a href="https://yodizschool.ru/oferta.pdf" target="_blank" className={styles.footer__policy}>Договор
                        оферты</a>
                    <a href="privacy.pdf" target="_blank" className={styles.footer__policy}>Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;