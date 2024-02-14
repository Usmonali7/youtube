import { Modal } from "../utils/data";
import Icons from "../assets/icons";
import { Link } from "react-router-dom";

const ProfilModal = ({setOpen}) => {
  
    return <div className="profile-modal" onClick={() => setOpen(false)}>
        <div className="profile-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-ava">
                <div className="avatar__img">
                    <img src={"http://womfit.com/wp-content/uploads/2021/10/beauty-nature-outdoor-teen.jpg"} alt="avatar pic"
                    />
                </div>
                <div className="modal-group">
                <h1 className="modal-font">Dollie Blair</h1>
                <p>@dollieblair</p>
                </div>
            </div>
            {
                Modal.map((item) => (
                    <div className="modal-main" key={item.id}>
                        <div className="icons">
                            <button className="modal-button">{item.icon}</button>
                        </div>
                    <Link className="modal-text">{item.text}</Link>
                    </div>
                ))
            }
        </div>
    </div>;
};

export default ProfilModal;
