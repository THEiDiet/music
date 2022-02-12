import React from 'react'
import s from './../../styles/MainPage.module.scss'
import c from './../../styles/common.module.scss'
import TopArtists from "./pieces/TopArtists";
import TrackList from "../common/TrackList";
import Genres from "../common/Genres";
import darkTheme from './../../styles/darkTheme.module.scss'
import lightTheme from './../../styles/lightTheme.module.scss'

const MainPage = () => {
    const th = 'dark' === 'dark' ? darkTheme : lightTheme
    return (
        <div className={`${th.bgColor} ${s.mainPage}`}>
            <div className={`${c.container} ${c.flexCol} ${c.alignItemsEnd}`}>
                <TopArtists/>
                <div className={`${c.flexRow} ${s.tracksAndGenres}`}>
                    <TrackList/>
                    <Genres className={th.bgElemColor}/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;