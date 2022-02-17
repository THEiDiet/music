import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getChart} from "../api/serverApi";

export const fetchChart = createAsyncThunk('main/fetchChart',async(params,thunkAPI)=>{
    return await getChart().then(res=>res.json())
})

const initialState = {
    artists:null,
    tracks:null,
    podcasts:null,
    albums:null,
    playlists:null
}
const mainPageSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        sayHello: (state) => {
            state.title = 'Hello'
        },
    },
    extraReducers:builder => {
        builder.addCase(fetchChart.fulfilled,(state,action)=>{
            state.artists = action.payload.artists.data
            state.tracks = action.payload.tracks.data
            state.podcasts = action.payload.podcasts.data
            state.albums = action.payload.albums.data
            state.playlists = action.payload.playlists.data
        })
    }
})

// Action creators are generated for each case reducer function
export const {sayHello} = mainPageSlice.actions

export default mainPageSlice.reducer