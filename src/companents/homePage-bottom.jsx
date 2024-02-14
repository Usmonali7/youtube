import { homeBottom } from "../utils/data";
import Icons from "../assets/icons";

const HomeBottom = () => {
    return (
        <div className="home__bottom">
        <div className="home__main">
            <div className="avatar">
                <div className="avatar__img">
                    <img src={"http://womfit.com/wp-content/uploads/2021/10/beauty-nature-outdoor-teen.jpg"} alt="avatar pic"
                    />
                </div>
                <h1 className="avatar__title">Dollie Blair</h1>
            </div>
            <div className="btn__group">
                <button className="btn__group_arrow"><Icons.arrowLeft/></button>
                <button className="btn__group_arrow"><Icons.arrowRight/></button>
            </div>
        </div>
        <div className="home__bottom_data">
            {homeBottom.map((item) => (
                <div className="homeB__card" key={item.id}>
                    <div className="homeB__card_img">
                        <img src={item.img} alt={item.title}/>
                        <span className="time">{item.time}</span>
                    </div>
                    <h1 className="home__bottom_title">{item.title}</h1>
                    <div className="home__bottom_info">
                    <div className="home__bottom_view">
                            <span>{item.view} views</span> .
                            <span>{item.date}</span>
                        </div>
                        <p className="home__bottom_user">{item.username}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default HomeBottom;