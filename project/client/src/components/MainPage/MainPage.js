import React, {useEffect} from 'react'
import s from './../../styles/MainPage.module.scss'
import c from './../../styles/common.module.scss'
import TopArtists from "./pieces/TopArtists";
import TrackList from "../common/TrackList";
import TopPlaylists from "../common/TopPlaylists";
import darkTheme from './../../styles/darkTheme.module.scss'
import lightTheme from './../../styles/lightTheme.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchChart} from "../../store/mainPageSlice";

const MainPage = () => {
    const dispatch = useDispatch()

    const podcasts = useSelector(s => s.main.podcasts)
    const albums = useSelector(s => s.main.albums)

    const theme = useSelector(st => st.settings.theme)
    const th = theme === 'dark' ? darkTheme : lightTheme
    const fetchChartHandler = ()=>{
        dispatch(fetchChart())
    }
    useEffect(()=>{
        fetchChartHandler()
    },[])
    return (
        <div className={`${th.bgColor} ${s.mainPage}`}>
            <div className={`${c.container} ${c.flexCol} ${c.alignItemsEnd}`}>
                <TopArtists/>
                {/*<button onClick={fetchChartHandler}>get chart</button>*/}
                <div className={`${c.flexRow} ${s.tracksAndGenres}`}>
                    <TrackList/>
                    <TopPlaylists className={th.bgElemColor}/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;