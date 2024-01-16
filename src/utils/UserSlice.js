import {createSlice} from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name: "user",
    initialState: {
        data: {}
    },
    reducers: {
        addInitialData: (state, action) => {
            state.data = action.payload;
        }
    }
});


export const { addInitialData } = UserSlice.actions;
export default UserSlice.reducer;