import {createSlice} from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        removeMovies: (state) => {
            state.nowPlayingMovies = null;
        }
    }
});

export const { addMovies, removeMovies } = MoviesSlice.actions;
export default MoviesSlice.reducer;