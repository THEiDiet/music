import React from 'react';
import s from './../../styles/TrackList.module.scss'
import Track from "./Track";
import darkTheme from "../../styles/darkTheme.module.scss";
import lightTheme from "../../styles/lightTheme.module.scss";
import {useSelector} from "react-redux";

const TrackList = () => {
    const tracks = useSelector(s => s.main.tracks)
    let theme = useSelector(st => st.settings.theme)
    const th = theme === 'dark' ? darkTheme : lightTheme

    return (
        <div className={`${th.bgElemColor} ${s.trackList}`}>
            {tracks && tracks.map(track => {
                return <Track key={track.id} track={track}/>
            })}

        </div>
    );
};

export default TrackList;