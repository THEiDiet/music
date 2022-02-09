import {configureStore} from '@reduxjs/toolkit'
import mainPageReducer from "./mainPageSlice";


const store = configureStore({
    reducer: {
        main: mainPageReducer,
    }
})
export default store