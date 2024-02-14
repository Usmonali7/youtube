import { Suspense } from "react";
import Logo from "../../companents/Logo";
import HeaderSide from "../../companents/header";
import MenuBar from "../../companents/menu-bar";
import Loading from "../../companents/Loading";
import { routers } from "../../utils/router";
import { Route, Routes } from "react-router-dom";

const AppRouters = () => {
    return (
        <div className="app">
            <div className="app__menu">
                <Logo/>
                <MenuBar/>
            </div>
            <div className="app__all">
                <div className="app__header">
                    <HeaderSide/>
                </div>
                <div className="app__main">
                    <Suspense fallback={<Loading/>}>
                    <Routes>
                            {routers.map((item) => (
                                <Route
                                    key={item.id}
                                    path={item.path}
                                    element={item.element}
                                />
                            ))}
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default AppRouters;