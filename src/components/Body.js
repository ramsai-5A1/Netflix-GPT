import { RouterProvider } from "react-router-dom";
import AppRoutes from "../utils/AppRoutes";

const Body = () => {
    return (
        <div>
            <RouterProvider router={AppRoutes}/>
        </div>
    )
};

export default Body;