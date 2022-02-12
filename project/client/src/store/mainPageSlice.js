import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    title: 'Hi',
}
const mainPageSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        sayHello: (state) => {
            state.title = 'Hello'
        },
    }
})

// Action creators are generated for each case reducer function
export const {sayHello} = mainPageSlice.actions

export default mainPageSlice.reducer