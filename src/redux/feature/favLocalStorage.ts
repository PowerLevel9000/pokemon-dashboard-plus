import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
    id: number | string;
    name: string;
}

interface LocalStorageState {
    items: Item[];
}

const getItemsFromLocalStorage = (): Item[] => {
    const storedItems = localStorage.getItem('items');
    return storedItems ? JSON.parse(storedItems) : [];
  };

const initialState: LocalStorageState = {
    items: getItemsFromLocalStorage(),
};

const localStorageSlice = createSlice({
    name: 'localStorage',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<Item>) {
            state.items.push(action.payload);
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        removeItem(state, action: PayloadAction<{ id: number }>) {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items.splice(index, 1);
                localStorage.setItem('items', JSON.stringify(state.items));
            }
        },
    },
});

export const { addItem, removeItem } = localStorageSlice.actions;
export default localStorageSlice.reducer;
