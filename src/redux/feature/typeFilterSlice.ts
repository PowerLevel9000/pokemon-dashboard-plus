import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: "all",
    previous: true,
    next: false,
}

const typeFilterSlice = createSlice({
    name: "typeFilter",
    initialState,
    reducers: {
        setType: (state, action) => {
            state.type = action.payload;
        },
        togglePrevious: (state, action) => {
            state.previous = action.payload;
        },
        toggleNext: (state, action) => {
            state.next = action.payload;
        }
    }
});

export const { setType, toggleNext, togglePrevious } = typeFilterSlice.actions;
export default typeFilterSlice.reducer;