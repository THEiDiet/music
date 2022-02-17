import React from 'react';
import s from '../../styles/TopPlaylists.module.scss'
import c from './../../styles/common.module.scss'
import {useSelector} from "react-redux";
import Avatar from "./Avatar";

const TopPlaylists = ({className}) => {
    // const playlists = ['first','second','third']
    const playlists = useSelector(s => s.main.playlists)
    const containerCN = `${className ? className :''} ${s.playlist}`
    return (
        <div className={containerCN}>
            <h5 className={`${c.header} ${s.playlist__header}`}>Top playlists</h5>
            <div className={s.playlist__list}>
                {playlists && playlists.map(item =><PlaylistItem key={item} playlist={item}/>)}
            </div>
        </div>
    );
};

const PlaylistItem = ({playlist})=>{
    const {title,picture_small:image,tracklist} = playlist
    return <div className={s.playlist__item}>
        <Avatar image={image} size={'small'}/>
        <div>{title}</div>
    </div>
}

export default TopPlaylists;