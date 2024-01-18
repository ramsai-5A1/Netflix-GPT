import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserSlice";
import moviesReducer from "./MoviesSlice";
import gptReducer from "./GptSlice";

const AppDataStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer
    }
});

export default AppDataStore;