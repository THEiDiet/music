import React from 'react';
import s from './../../styles/TrackList.module.scss'
import Track from "./Track";

const TrackList = () => {
    return (
        <div className={s.trackList}>
            <Track/>
        </div>
    );
};

export default TrackList;