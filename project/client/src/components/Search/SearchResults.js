import React, {useEffect} from 'react';
import c from './../../styles/common.module.scss'
import s from './../../styles/SearchResults.module.scss'
import {fetchArtist, fetchArtistTracks} from "../../store/searchSlice";
import {useDispatch, useSelector} from "react-redux";
import Track from "../common/Track";
import darkTheme from "../../styles/darkTheme.module.scss";
import lightTheme from "../../styles/lightTheme.module.scss";
import Card from "../common/Card";

const SearchResults = () => {
    let theme = useSelector(st => st.settings.theme)
    const th = theme === 'dark' ? darkTheme : lightTheme
    const dispatch = useDispatch()
    const artist = useSelector(state => state.search.artists)
    const tracks = useSelector(state => state.search.tracks)
    const getArtist = () => {
        dispatch(fetchArtist('pink'))
        dispatch(fetchArtistTracks('https://api.deezer.com/artist/69925/top?limit=50'))
    }

    useEffect(() => {
        getArtist()
    }, [])
    return (
        artist.length
            ?
            <div className={`${th.bgColor} ${s.searchPage}`}>
                <div className={`${c.container} ${c.flexCol} ${c.alignItemsEnd}`}>
                    <div className={`${th.bgElemColor} ${s.searchContainer}`}>
                        <div className={s.artists}>
                            <h3 className={c.header}>Artists</h3>
                            <div className={s.artists__list}>
                                <Card image={artist[0].picture_medium} name={artist[0].name} link={artist[0].tracklist}/>
                            </div>
                        </div>
                        <div className={s.tracks}>
                            <h3 className={c.header}>Top tracks from {artist[0].name}</h3>
                            {tracks.map((track,idx) =>{
                                return <Track key={idx} track={track}/>
                            })}
                        </div>
                    </div>

                </div>
            </div>

            : <div>nothing</div>
    )

};

export default SearchResults;