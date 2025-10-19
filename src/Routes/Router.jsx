import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
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
