import {createSlice} from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        removeMovies: (state) => {
            state.nowPlayingMovies = null;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        removeTrailerVideo: (state) => {
            state.trailerVideo = null;
        }
    }
});

export const { addMovies, addTrailerVideo } = MoviesSlice.actions;
export default MoviesSlice.reducer;