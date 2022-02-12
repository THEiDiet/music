import {configureStore} from '@reduxjs/toolkit'
import mainPageSlice from "./mainPageSlice";
import searchSlice from "./searchSlice";


const store = configureStore({
    reducer: {
        main: mainPageSlice,
        search:searchSlice
    }
})
export default store