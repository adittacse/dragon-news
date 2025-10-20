import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                index: "category/:id",
                element: <CategoryNews />
            }
        ]
    },
    {
        path: "auth",
        element: <p>Authentication Layout</p>,
    },
    {
        path: "news",
        element: <p>News Layout</p>,
    },
    {
        path: "*",
        element: <p>404 not found</p>
    }
]);

export default Router;
