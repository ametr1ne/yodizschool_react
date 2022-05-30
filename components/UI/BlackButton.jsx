import React from 'react';
import styles from "../../public/scss/Components/BlackButton.module.scss";
import Link from "next/link";

const BlackButton = ({children, courseLink}) => {
    return (
        <>
            <Link href={courseLink}>
                <a className={styles.details_btn + " " + styles.black_btn + " btn"}>
                    {children}
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.316 6.03792C21.2766 5.94957 21.2274 5.87104 21.1585 5.80233L16.4153 1.07075C16.1299 0.786069 15.6576 0.786069 15.3722 1.07075C15.0868 1.35543 15.0868 1.82662 15.3722 2.1113L18.8558 5.58636H1.11305C0.709583 5.58636 0.375 5.91031 0.375 6.3226C0.375 6.7349 0.709583 7.05885 1.11305 7.05885H18.8558L15.3722 10.5339C15.0868 10.8186 15.0868 11.2898 15.3722 11.5745C15.5198 11.7217 15.7068 11.7904 15.8937 11.7904C16.0807 11.7904 16.2677 11.7217 16.4153 11.5745L21.1585 6.84288C21.2274 6.77417 21.2766 6.69563 21.316 6.60728C21.3947 6.42077 21.3947 6.22444 21.316 6.03792Z"
                            fill="white"/>
                    </svg>
                </a>
            </Link>
        </>
    );
};

export default BlackButton;