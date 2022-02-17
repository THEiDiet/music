import React from 'react';
import Avatar from "./Avatar";
import ava from '../../assets/photo.jpg'
import s from '../../styles/Card.module.scss'

const Card = ({image,link,name,trackName}) => {
    return (
        <div className={s.card}>
            <Avatar size={'large'} image={image}/>
            {trackName && <div className={s.track}>{trackName}</div>}
            <div className={s.artist}>{name}</div>
        </div>
    );
};

export default Card;