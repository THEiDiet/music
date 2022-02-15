import React, {useState} from 'react';
import {ReactComponent as Like} from "../../assets/like.svg";
import s from './../../styles/Track.module.scss'
import c from './../../styles/common.module.scss'
import darkTheme from "../../styles/darkTheme.module.scss";
import lightTheme from "../../styles/lightTheme.module.scss";
import Avatar from "./Avatar";
import ava from './../../assets/photo.jpg'
import {useSelector,useDispatch} from "react-redux";
import {setCurrentTrack} from "../../store/commonSettingsSlice";
const Track = ({track}) => {
    const {artist:{name:artist}, title, duration, preview:link,id:trackId} = track
    const image = track.artist.picture_small || track.album.cover_small
    const theme = useSelector(st => st.settings.theme)
    const currentTrack = useSelector(st => st.settings.currentTrack)
    const dispatch = useDispatch()
    const th = theme === 'dark' ? darkTheme : lightTheme
    const song = {time: '3:22', artist: 'Kinoko', track_name: 'After rain'}
    const sec = duration && (duration % 60 > 9 ? duration % 60 : '0' + duration % 60)
    const min = Math.floor(duration / 60) || 2
    const song_duration = min + ':' + sec
    const toggleMusicHandler = ()=>{
        console.log('working '+link)
    }
    const activeTrackHandler = ()=>{
        dispatch(setCurrentTrack({id:trackId}))

    }
    return (
        <div onClick={activeTrackHandler} className={`${th.activeOutline} ${s.songContainer} ${currentTrack === trackId ? c.outlineWidth : '' }`}>
            <div className={s.playMusic} onClick={toggleMusicHandler}>
                <Avatar image={image || ava}/>
                <div><span/></div>
            </div>
            <div className={s.song}>
                <div className={s.song__info}>
                    <h6>{title || song.track_name}</h6>
                    <span className={th.fontColorLight}>{artist || song.artist}</span>
                </div>
                <div className={`${th.fontColorLight} ${s.song__time}`}>{song_duration || song.time}</div>
            </div>
            <Like className={`${s.like} ${th.inactiveFill}`}/>
        </div>
    );
};

export default Track;