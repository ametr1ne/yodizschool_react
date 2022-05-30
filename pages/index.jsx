import MainContainer from "../components/MainContainer";
import CoursesBlock from "../components/MainPage/CoursesBlock";
import AboutBlock from "../components/MainPage/AboutBlock";
import FeedbackBlock from "../components/MainPage/FeedbackBlock";
import SliderBlock from "../components/MainPage/SliderBlock";
import InteractiveBlock from "../components/MainPage/InteractiveBlock";

const Index = () => {
    return (
        <MainContainer title={'Главная страница'}>

            <CoursesBlock />

            <AboutBlock />

            <FeedbackBlock/>

            <SliderBlock/>

            <InteractiveBlock/>

        </MainContainer>
);
};

export default Index;