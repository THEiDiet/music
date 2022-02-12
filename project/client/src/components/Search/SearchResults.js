import React, {useEffect} from 'react';
import c from './../../styles/common.module.scss'
import {fetchArtist} from "../../store/searchSlice";
import {useDispatch, useSelector} from "react-redux";

const SearchResults = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.search.artists)
    const getArtist =  () => {
         dispatch(fetchArtist('aimer'))
    }

    useEffect(() => {
        getArtist()
    }, [])


    return <div className={c.container}>
        {state.length ?
            <div className={c.search}>
                {state[0].name}
            </div>
            : <div>nothing</div>}
    </div>
};

export default SearchResults;