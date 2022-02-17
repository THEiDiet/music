import {configureStore} from '@reduxjs/toolkit'
import mainPageSlice from "./mainPageSlice";
import searchSlice from "./searchSlice";
import commonSettingsSlice from "./commonSettingsSlice";


const store = configureStore({
    reducer: {
        main: mainPageSlice,
        search:searchSlice,
        settings:commonSettingsSlice
    }
})
export default store