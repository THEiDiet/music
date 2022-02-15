import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    theme: 'dark',
    currentTrack:null
}
const commonSettingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark'
        },
        setCurrentTrack:(state,action)=>{
            console.log( action.payload.id)
            if(state.currentTrack === action.payload.id){
                state.currentTrack = null
            } else state.currentTrack = action.payload.id
        }
    }
})

// Action creators are generated for each case reducer function
export const {toggleTheme,setCurrentTrack} = commonSettingsSlice.actions

export default commonSettingsSlice.reducer