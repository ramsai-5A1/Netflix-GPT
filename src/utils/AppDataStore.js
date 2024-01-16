import {configureStore} from "@reduxjs/toolkit"
import UserSlice from "./UserSlice";

const AppDataStore = configureStore({
    reducer: {
        user: UserSlice
    }
});

export default AppDataStore;