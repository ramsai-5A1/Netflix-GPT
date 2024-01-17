import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserSlice";
import moviesReducer from "./MoviesSlice";

const AppDataStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    }
});

export default AppDataStore;