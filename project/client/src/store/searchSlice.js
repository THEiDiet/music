import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {searchArtist} from "../api/serverApi";

export const fetchArtist = createAsyncThunk(
    'search/fetchArtist',
    async (artist, thunkAPI) => {

        return await searchArtist(artist).then(r=>r.json())
    }
)

const initialState = {
    artists:[]
}
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        sayHello: state => {
            state.title = 'Hello'
        },
        sayGoodbye:state =>{
            state.title = 'Bye!'
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchArtist.fulfilled, (state, action) => {
            // Add artists to the state array
            state.artists.push(action.payload)
        })
    },
})

//async thunk


// Action creators are generated for each case reducer function
export const { sayHello } = searchSlice.actions

export default searchSlice.reducer
