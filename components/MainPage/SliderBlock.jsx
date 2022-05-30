import React from 'react';
import {useEffect} from "react";
import Image from "next/image";
import s from '../../public/scss/MainPage/SliderBlock.module.scss'
import slick from '../../public/scss/slick.module.scss'
import s1 from '../../public/img/s1.jpg'

const SliderBlock = () => {

    useEffect(() => {



    }, [])

    const Feed = ({children, name, finisher}) => {
        return (
            <div className={s.reviewSlider__contentItem}>
                <div className={s.sliderBlock__slideWrap}>
                    <p className={s.reviewSlider__contentText}>
                        {children}
                    </p>
                    <p className={s.reviewSlider__contentName}>{name}</p>
                    <p className={s.sliderBlock__txt}>{finisher}</p>
                </div>
            </div>
        )
    }
    const Avatar = () => {
        return (
            <div className={s.reviewSlider__controlItem}>
                <svg viewBox="0 0 36 36" className={s.progress}>
                    <path className={s.circle} strokeWidth="4" strokeDasharray="0, 100"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                </svg>
                <Image src={s1} alt="pic" />
            </div>
        )
    }
    return (
        <div className={s.sliderBlock__review + ' ' + " review-slider"}>
            <div id="reviewSlider" className={s.reviewSlider__content}>
                <h1 id='hello'></h1>
                <Feed name={'Ирина Стрелкова'} finisher={'Выпускница'}>
                    Удобно, что занятия проходят в вечернее время, а на
                    выполнение ДЗ есть целая неделя
                </Feed>
                <Feed name={'Иван Злобин'} finisher={'Выпускник'}>
                    Выбрал Yodiz School, потому что на курсе мы изучали
                    не только графику, но и моушн-дизайн
                </Feed>
                <Feed name={'Маша Краснова'} finisher={'Выпускница'}>
                    Я пришла с нулевыми знаниями, а теперь ощутимо
                    освоилась и
                    хочу продолжать
                </Feed>
                <Feed name={'Евгения Фонарева'} finisher={'Выпускница'}>
                    Курс оказался не нудными лекциями, а многогранным
                    взаимодействием с нами
                </Feed>
                <Feed name={'Маргарита Заббарова'} finisher={'Выпускница'}>
                    Я бы посоветовала курс тем, кто в кратчайшие сроки
                    хочет
                    освоить профессию
                </Feed>
            </div>
            <div id="reviewSliderThumbs" className={s.reviewSlider__control}>

                <Avatar/>
                {/*<div className={s.reviewSlider__controlItem}>*/}
                {/*    <svg viewBox="0 0 36 36" className={s.progress}>*/}
                {/*        <path className="circle" strokeWidth="4" strokeDasharray="0, 100"*/}
                {/*              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>*/}
                {/*    </svg>*/}
                {/*    <img src="../../public/img/s1.jpg" alt="pic"/>*/}
                {/*</div>*/}
                <div className="review-slider__control-item">
                    <svg viewBox="0 0 36 36" className="progress">
                        <path className="circle" strokeDasharray="0, 100"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    </svg>
                    <img src="/img/s2.jpg" alt="pic"/>
                </div>
                <div className="review-slider__control-item">
                    <svg viewBox="0 0 36 36" className="progress">
                        <path className="circle" strokeDasharray="0, 100"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    </svg>
                    <img src="/img/s3.jpg" alt="pic"/>
                </div>
                <div className="review-slider__control-item">
                    <svg viewBox="0 0 36 36" className="progress">
                        <path className="circle" strokeDasharray="0, 100"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    </svg>
                    <img src="/img/s4.jpg" alt="pic"/>
                </div>
                <div className="review-slider__control-item">
                    <svg viewBox="0 0 36 36" className="progress">
                        <path className="circle" strokeDasharray="0, 100"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    </svg>
                    <img src="/img/s5.jpg" alt="pic"/>
                </div>
            </div>
        </div>
    );
};

export default SliderBlock;