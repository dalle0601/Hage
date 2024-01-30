import Career from '../components/career';
import MainContext from '../components/mainContext';
import Project from '../components/project';
import WorkExp from '../components/workExp';

const Home = () => {
    return (
        <>
            <MainContext />
            <Career />
            <WorkExp />
            <Project />
        </>
    );
};

export default Home;
