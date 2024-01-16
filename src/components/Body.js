import { RouterProvider } from "react-router-dom";
import AppRoutes from "../utils/AppRoutes";
import { Provider } from "react-redux";
import AppDataStore from "../utils/AppDataStore";

const Body = () => {
    return (
        <div>
            <Provider store={AppDataStore}>
                <RouterProvider router={AppRoutes}/>
            </Provider>
        </div>
    )
};

export default Body;