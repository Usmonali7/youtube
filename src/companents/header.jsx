import Profil from "./profil"
import Search from "./search"

const HeaderSide = () => {
    return (
        <div className="header">
            <Search/>
            <Profil/>
        </div>
    );
};

export default HeaderSide;