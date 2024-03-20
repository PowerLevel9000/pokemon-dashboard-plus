import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: "all",
    page: 1,
    previous: true,
    next: false,
    dataCountOfNotAllType: 0
}

const typeFilterSlice = createSlice({
    name: "typeFilter",
    initialState,
    reducers: {
        setType: (state, action) => {
            state.type = action.payload;
        },
        setPrevious: (state, action) => {
            state.previous = action.payload;
        },
        setNext: (state, action) => {
            state.next = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setDataCountOfNotAllType: (state, action) => {
            state.dataCountOfNotAllType = action.payload;  
        }
    }
});

export const { setType, setNext, setPrevious, setDataCountOfNotAllType, setPage } = typeFilterSlice.actions;
export default typeFilterSlice.reducer;