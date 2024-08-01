import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../components/errorpage";
import Home from "../module/home";
import DefaultLayout from "./defaultLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "*",
        element: <Errorpage />
    }
])

export default router