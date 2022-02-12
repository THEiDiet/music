import React from 'react';
import s from './../../styles/Genres.module.scss'
import c from './../../styles/common.module.scss'

const Genres = ({className}) => {
    const playlists = ['first','second','third']
    const containerCN = `${className ? className :''} ${s.playlist}`
    return (
        <div className={containerCN}>
            <h5 className={`${c.header} ${s.playlist__header}`}>Top playlists</h5>
            {playlists.map(item =><div className={s.playlist__item}>{item}</div>)}
        </div>
    );
};

export default Genres;