import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "Gpt",
    initialState: {
        shouldShowGpt: false,
        moviesList: null,
        moviesResult: null
    },
    reducers: {
        toggleShouldShowGptVariable: (state) => {
            state.shouldShowGpt = !state.shouldShowGpt;
        },
        addMoviesInformation: (state, action) => {
            const {moviesList, moviesResult} = action.payload;
            state.moviesList = moviesList;
            state.moviesResult = moviesResult;
        }
    }
});

export const { toggleShouldShowGptVariable, addMoviesInformation } = GptSlice.actions;
export default GptSlice.reducer;