import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

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
                path: "category/:id",
                loader: () => fetch("/news.json"),
                element: <CategoryNews />,
                hydrateFallbackElement: <Loading />
            },
            {
                path: "*",
                element: <p>404 not found</p>
            }
        ]
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/auth/register",
                element: <Register />
            }
        ]
    },
    {
        path: "news-details/:id",
        loader: () => fetch("/news.json"),
        element: <PrivateRoute><NewsDetails /></PrivateRoute>,
        hydrateFallbackElement: <Loading />
    }
]);

export default Router;
