import s from '../../public/scss/MainPage/InteractiveBlock.module.scss'
import BlackButton from "../UI/BlackButton";

const InteractiveBlock = () => {
    return (
        <div className={s.interactiveBlock}>
            <div className="hide-container">
                <div className="cards_container">
                    <div id="book" className={s.bookCard + " " + s.interactiveItem + " cards_container__card"}>
                        <p className={s.itemCategory}>Книга</p>
                        <div className={s.imgContainer}>
                            <img src="/img/book.png" alt="book"/>
                        </div>
                        <h3>Digital-новелла о поиске себя и любимого дела</h3>
                        {/*<a href="" className={s.interactiveBtn + " " + btn.black_btn + " btn"}>Читать книгу*/}
                        {/*    <svg width="22" height="11" viewBox="0 0 22 11" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path*/}
                        {/*            d="M21.316 5.20363C21.2766 5.11528 21.2274 5.03675 21.1585 4.96804L16.4153 0.236459C16.1299 -0.0482207 15.6576 -0.0482207 15.3722 0.236459C15.0868 0.521139 15.0868 0.992334 15.3722 1.27701L18.8558 4.75207H1.11305C0.709583 4.75207 0.375 5.07602 0.375 5.48831C0.375 5.90061 0.709583 6.22456 1.11305 6.22456H18.8558L15.3722 9.69962C15.0868 9.9843 15.0868 10.4555 15.3722 10.7402C15.5198 10.8874 15.7068 10.9561 15.8937 10.9561C16.0807 10.9561 16.2677 10.8874 16.4153 10.7402L21.1585 6.00859C21.2274 5.93988 21.2766 5.86134 21.316 5.77299C21.3947 5.58648 21.3947 5.39015 21.316 5.20363Z"*/}
                        {/*            fill="white"/>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                        <BlackButton
                            courseLink={'https://yodizschool.ru/book'}
                            className={'interactiveBtn'}>
                            Читать книгу
                        </BlackButton>
                    </div>

                    {/*<div id="test" className="testCard interactiveItem cards-container__card"{s.interactiveBlock}>*/}
                    {/*    <p className="itemCategory"{s.interactiveBlock}>Тест</p>*/}
                    {/*    <div className="imgContainer"{s.interactiveBlock}>*/}
                    {/*        <img src="/img/gold_items.png" alt="items"/>*/}
                    {/*    </div>*/}
                    {/*    <h3>Какой у тебя уровень<br/> в веб-дизайне?</h3>*/}
                    {/*    <a href="https://yodizschool.ru/test/" className="btn black-btn interactiveBtn"{s.interactiveBlock}>Пройти тест*/}
                    {/*        <svg width="22" height="11" viewBox="0 0 22 11" fill="none"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg">*/}
                    {/*            <path*/}
                    {/*                d="M21.316 5.20363C21.2766 5.11528 21.2274 5.03675 21.1585 4.96804L16.4153 0.236459C16.1299 -0.0482207 15.6576 -0.0482207 15.3722 0.236459C15.0868 0.521139 15.0868 0.992334 15.3722 1.27701L18.8558 4.75207H1.11305C0.709583 4.75207 0.375 5.07602 0.375 5.48831C0.375 5.90061 0.709583 6.22456 1.11305 6.22456H18.8558L15.3722 9.69962C15.0868 9.9843 15.0868 10.4555 15.3722 10.7402C15.5198 10.8874 15.7068 10.9561 15.8937 10.9561C16.0807 10.9561 16.2677 10.8874 16.4153 10.7402L21.1585 6.00859C21.2274 5.93988 21.2766 5.86134 21.316 5.77299C21.3947 5.58648 21.3947 5.39015 21.316 5.20363Z"*/}
                    {/*                fill="white"/>*/}
                    {/*        </svg>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default InteractiveBlock;