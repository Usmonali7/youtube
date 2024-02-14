import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage"))
const LibraryPage = lazy(() => import("./LibraryPage"))
const SubPage = lazy(() => import("./SubPage"))
const TrentPage = lazy(() => import("./TrendingPage"))

export { HomePage, LibraryPage, SubPage, TrentPage };