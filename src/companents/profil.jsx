import { useState } from "react";
import Icons from "../assets/icons";
import ProfilModal from "./profilModal";



const Profil = () => {
    const [open, setOpen] = useState(false);
    const openProfile = () => {
        setOpen(true)
    }
    return (
        <div className="profil">
            <button className="profil__btn">
                <Icons.video />
            </button>
            <button className="profil__btn">
                <Icons.shape />
            </button>
            <button className="profil__btn">
                <Icons.natif />
            </button>
            <button className="profil__avatar" onClick={openProfile}>
                <img
                    src='https://mykaleidoscope.ru/uploads/posts/2021-11/1636634390_106-mykaleidoscope-ru-p-top-krasivikh-devushek-devushka-krasivo-fo-110.jpg'
                    alt='avatar'
                />
            </button>
            {open && <ProfilModal setOpen={setOpen} />}
        </div>
    );
};

export default Profil;