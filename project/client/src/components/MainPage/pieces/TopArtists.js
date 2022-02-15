import React from 'react';
import s from './../../../styles/MainPage.module.scss'
import c from './../../../styles/common.module.scss'
import {useSelector} from "react-redux";
import darkTheme from "../../../styles/darkTheme.module.scss";
import lightTheme from "../../../styles/lightTheme.module.scss";
import Card from "../../common/Card";

const TopArtists = () => {
    const artists = useSelector(s => s.main.artists)
    const theme = useSelector(st => st.settings.theme)
    const th = theme === 'dark' ? darkTheme : lightTheme
    return (
        <div className={`${th.bgElemColor} ${s.topArtists}`}>
            <h3 className={c.header}>Top artists</h3>
            <div className={s.topArtistsList}>
                {artists && artists.map(artist => {
                    return <Card key={artist.id} image={artist.picture_medium} name={artist.name} link={artist.tracklist}/>
                })}
            </div>
        </div>
    );
};

export default TopArtists;