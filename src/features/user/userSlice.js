import { createSlice } from "@reduxjs/toolkit"

// Create the initial state
const initialState = {
    name: "",
    email: "",
    photo: ""
}

// Create the user slice
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Sign the user in
        setUserLogin: (state, action) =>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        // Sign the user out
        setSignOut:  (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        } 
    }

})

// export the actions
export const { setUserLogin, setSignOut } = userSlice.actions;
// export the states
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
// export the reducer
export default userSlice.reducer;
// then go to store and import the userSlice and userReducer, and declare the user