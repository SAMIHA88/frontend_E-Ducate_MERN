// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            return action.payload;
        },
        addToCartSuccess: (state, action) => {
            // Handle adding an item to the cart
            const { courseId, qty } = action.payload;
            const existingCartItem = state.find(item => item.courseId === courseId);

            if (existingCartItem) {
                existingCartItem.qty += qty;
            } else {
                state.push({ courseId, qty });
            }
        },
        removeFromCartSuccess: (state, action) => {
            // Handle removing an item from the cart
            const { courseId } = action.payload;
            return state.filter(item => item.courseId !== courseId);
        },
    },
});

export const { setCart, addToCartSuccess, removeFromCartSuccess } = cartSlice.actions;
export default cartSlice.reducer;
