import React from 'react'
import s from './../../styles/MainPage.module.scss'
import c from './../../styles/common.module.scss'
import TopArtists from "./pieces/TopArtists";
import TrackList from "../common/TrackList";
import Genres from "../common/Genres";

const MainPage = () => {

    return (
        <div className={` ${s.mainPage}`}>
            <div className={`${c.container} ${c.flexCol} ${c.alignItemsEnd}`}>
                <TopArtists/>
                <div className={`${c.flexRow} ${s.tracksAndGenres}`}>
                    <TrackList/>
                    <Genres/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;