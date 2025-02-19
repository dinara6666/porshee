import Celine from "./components/celine/Celine.jsx";
import VideoComponent from "./components/VideoComponent/VideoComponent.jsx";
import CarList from "./components/CarList/CarList.jsx";
import Porsh from "./components/porsh/Porsh.jsx";
import RouterApp from "./RouterApp.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const App = () => {
    return (
        <div>
            <ThemeToggle />
            <RouterApp/>
            <Celine/>
            <CarList/>
            <VideoComponent/>


        </div>
    );
};

export default App;

