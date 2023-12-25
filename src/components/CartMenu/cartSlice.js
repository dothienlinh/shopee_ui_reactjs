import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCart(state, action) {
      state = action.payload
    }
  }
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer