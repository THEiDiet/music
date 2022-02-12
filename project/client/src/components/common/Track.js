import React from 'react';
import {ReactComponent as Like} from "../../assets/like.svg";
import s from './../../styles/Track.module.scss'
import darkTheme from "../../styles/darkTheme.module.scss";
import lightTheme from "../../styles/lightTheme.module.scss";

const Track = () => {
    const th = 'dark' === 'dark' ? darkTheme : lightTheme
    const song = {time:'3:22',artist:'Kinoko',track_name:'After rain'}
    return (
        <div className={s.songContainer}>
            <div className={s.avatar}>ava</div>
            <div className={s.song}>
                <div className={s.song__info}>
                    <h6>{song.artist}</h6>
                    <div>{song.track_name}</div>
                </div>
                <div className={s.song__time}>{song.time}</div>
            </div>
            <Like className={`${s.like} ${th.activeFill}`}/>
        </div>
    );
};

export default Track;