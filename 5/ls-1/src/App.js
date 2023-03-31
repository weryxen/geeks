import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ChangeTitle from "./comps/changeTitle/ChangeTitle";

function App() {
    return (
        <>
            <AboutPage/>
            <ChangeTitle/>
            <h1>-----------------------------</h1>
            <MainPage/>
        </>
    );
}

export default App;