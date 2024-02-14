import { homeMiddle } from "../utils/data";

const HomeMiddle = () => {
    return (
        <div className="home__middle">
         <div className="middle_head">
            <h1 className="middle__title">Recommended</h1>
        </div>
            <div className="home__middle_data">
                {homeMiddle.map((item) => (
                    <div className="home__card" key={item.id}>
                        <div className="homeM__card_img">
                            <img src={item.img} alt={item.title}/>
                            <span className="time">{item.time}</span>
                        </div>
                        <h1 className="home__middle_title">{item.title}</h1>
                        <div className="home__middle_info">
                        <div className="home__middle_view">
                                <span>{item.view} views</span> .
                                <span>{item.date}</span>
                            </div>
                            <p className="home__middle_user">{item.username}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeMiddle;