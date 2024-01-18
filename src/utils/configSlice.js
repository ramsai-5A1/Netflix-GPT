import {createSlice} from "@reduxjs/toolkit"

const configSlice = createSlice({
    name: "config",
    initialState: {
        preferredLaunguage: "english"
    },
    reducers: {
        changePreferredLaunguage: (state, action) => {
            state.preferredLaunguage = action.payload;
        }
    }
});

export const { changePreferredLaunguage } = configSlice.actions;
export default configSlice.reducer;