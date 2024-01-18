import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "Gpt",
    initialState: {
        shouldShowGpt: false
    },
    reducers: {
        toggleShouldShowGptVariable: (state) => {
            state.shouldShowGpt = !state.shouldShowGpt;
        }
    }
});

export const { toggleShouldShowGptVariable } = GptSlice.actions;
export default GptSlice.reducer;