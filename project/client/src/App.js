import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import SearchResults from "./components/Search/SearchResults";
import SideBar from "./components/Sidebar/SideBar";

function App() {
    return (
        <BrowserRouter>
            <SideBar/>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path='/search' element={<SearchResults/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
