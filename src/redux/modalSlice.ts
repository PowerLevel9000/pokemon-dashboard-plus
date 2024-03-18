import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    title: "",
    body: null,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.title = action.payload.title;
            state.body = action.payload.body;
        },
        hideModal: (state) => {
            state.title = "";
            state.body = null;
        }
    }
});


export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
