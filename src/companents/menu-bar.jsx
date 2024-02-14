import { Link } from "react-router-dom";
import { menuList } from "../utils/data";

const MenuBar = () => {
    return (
        <div className="menu-bar">
            {menuList.map((item) => (
                <div className="list__item" key={item.id}>
                    <Link to={item.path} className="menu__link">
                        {item.icon}
                        <p className="menu__text">{item.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MenuBar;
