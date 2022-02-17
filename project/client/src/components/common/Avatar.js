import React from 'react';
import s from '../../styles/Avatar.module.scss'

const Avatar = ({image,size}) => {
    return (
            <span className={size === 'large' ? s.avatar__large:s.avatar__small} style={{background:`url(${image}) center / cover no-repeat`}}/>
    );
};

export default Avatar;