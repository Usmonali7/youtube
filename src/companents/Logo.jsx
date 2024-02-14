import Icons from "../assets/icons";
import LogoImg from "../assets/image/Black.png";

const Logo = () => {
    return <div className="logo">
        <Icons.burger/>
        <img src={LogoImg} alt="logo"/>
    </div>
}

export default Logo