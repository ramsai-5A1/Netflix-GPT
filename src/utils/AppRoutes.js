import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Body from "../components/Body";
import Browse from "../components/Browse";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        children: []
    },
    {
        path: "/browse",
        element: <Browse/>,
        children: []
    }
]);

export default AppRoutes;