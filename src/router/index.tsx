import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import NewsPage from "../pages/news";
import SingleNewsPage from "../pages/news/single-news";
import VacancyPage from "../pages/vacancy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/vacancy",
        element: <VacancyPage />,
    },
    {
        path: "/contact",
        element: <></>,
    },
    {
        path: "/news",
        element: <NewsPage />,
    },
    {
        path: "/news/:title",
        element: <SingleNewsPage />,
    },
]);

export default router;
