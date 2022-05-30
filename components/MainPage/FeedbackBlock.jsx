import React from 'react';
import styles from '../../public/scss/MainPage/FeedbackBlock.module.scss'

const FeedbackBlock = () => {
    return (
        <div id="feeds" className={styles.feedbacksBlock}>
            <div className="thin-container">
                <h2>Отзывы выпускников нашей школы</h2>
                <div className={styles.feedbacksBlock__top}>
                    <p className={styles.feedback_subtitle + " text-grey"}>Наши выпускники — наша гордость. Каждый день мы собираем
                        новые
                        отзывы, учитывая
                        ваши пожелания, вместе делаем курс ещё более эффективным</p>
                    <div className={styles.vk_block}>
                        <a href="https://vk.com/topic-102687029_39418828" className={styles.vk_btn} target="_blank">
                            <svg width="51" height="50" viewBox="0 0 51 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_446_238)">
                                    <path
                                        d="M0.0292969 24C0.0292969 12.6862 0.0292969 7.02944 3.54402 3.51472C7.05873 0 12.7155 0 24.0293 0H26.0293C37.343 0 42.9998 0 46.5146 3.51472C50.0293 7.02944 50.0293 12.6862 50.0293 24V26C50.0293 37.3137 50.0293 42.9705 46.5146 46.4853C42.9998 50 37.343 50 26.0293 50H24.0293C12.7155 50 7.05873 50 3.54402 46.4853C0.0292969 42.9705 0.0292969 37.3137 0.0292969 26V24Z"
                                        fill="white"/>
                                    <path
                                        d="M26.6334 36.021C15.2375 36.021 8.73763 28.2085 8.4668 15.2085H14.1751C14.3626 24.7502 18.5709 28.7918 21.9042 29.6252V15.2085H27.2794V23.4377C30.5711 23.0835 34.029 19.3335 35.1957 15.2085H40.5708C39.6749 20.2918 35.9249 24.0418 33.2583 25.5835C35.9249 26.8335 40.196 30.1043 41.821 36.021H35.9041C34.6333 32.0627 31.4669 29.0002 27.2794 28.5835V36.021H26.6334Z"
                                        fill="black"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_446_238">
                                        <rect width="50" height="50" fill="white" transform="translate(0.0292969)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <div>
                            <p>Больше отзывов</p>
                            <a href="https://vk.com/topic-102687029_39418828" target="_blank">ВКонтакте</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackBlock;