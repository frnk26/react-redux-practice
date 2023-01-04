import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        name: "Dude lebowski",
    },
    {
        id: "2",
        name: "Franklin",
    },
    {
        id: "3",
        name: "Xen",
    },

]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer
