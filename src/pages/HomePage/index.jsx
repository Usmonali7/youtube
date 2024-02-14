
import HomeBottom from "../../companents/homePage-bottom";
import HomeMiddle from "../../companents/homePage-middle";
import HomeTop from "../../companents/homePage-top";

const HomePage = () => {
    return (
        <div className="home">
            <HomeTop />
            <HomeMiddle/>
            <HomeBottom/>
        </div>
    );
};

export default HomePage;