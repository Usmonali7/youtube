import { HomePage, LibraryPage, SubPage, TrentPage } from "../pages";

export const routers = [
    {
        id: 1,
        path: "/",
        element: <HomePage />,
    },
    {
        id: 2,
        path: "/trent",
        element: <TrentPage />,
    },
    {
        id: 1,
        path: "/sub",
        element: <SubPage />,
    },
    {
        id: 1,
        path: "/library",
        element: <LibraryPage />,
    },
];
