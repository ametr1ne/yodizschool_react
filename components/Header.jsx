import styles from '../assets/scss/Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="dark"></div>
            <div className={styles.header__left}>
                <div className={styles.header__logo}>
                    <svg viewBox="0 0 82 62" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M61 0H21L0 21L41 62L82 21L61 0ZM46.94 30.02V45H35.06V30.02L21 15.94L27.94 9L41 22.06L54.06 9L61 15.94L46.94 30.02Z"/>
                    </svg>
                </div>
                <div className={styles.header__menu}>
                    <a href="#courses" className={styles.header__link}>Курсы</a>
                    <a href="#about" className={styles.header__link}>О школе</a>
                    <a href="#feeds" className={styles.header__link}>Отзывы</a>
                    <a href="#book" className={styles.header__link}>Книга</a>
                    <a href="#test" className={styles.header__link}>Тест</a>
                    <a href="#collab" className={styles.header__link}>Сотрудничество</a>
                    <a href="https://yodiz.ru" target="_blank"
                       className={styles.header__link + ' ' + styles.studio}>Студия</a>
                    <div className={styles.header__mobile_info}>
                        <p>© Yodiz Studio</p>
                        <p>ООО «Диджитал Продакшн»</p>
                    </div>
                </div>
                <button type="button" className={styles.header__burger}>
                    <span className={styles.header__line + ' ' + styles.header__line_1 }></span>
                    <span className={styles.header__line + ' ' + styles.header__line_2 }></span>
                    <span className={styles.header__line + ' ' + styles.header__line_3 }></span>
                </button>
            </div>
            <div className={styles.header__right}>
                <div className={styles.header__info}>
                    <a href="https://t.me/yodizstudio" target="_blank">Написать в поддержку</a>
                </div>
            </div>
        </header>
    );
};

export default Header;