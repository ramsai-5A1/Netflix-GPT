import {createSlice} from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUserData: (state, action) => {
            return action.payload;
        },
        removeUserData: (state) => {
            return null;
        }
    }
});


export const { addUserData, removeUserData } = UserSlice.actions;
export default UserSlice.reducer;