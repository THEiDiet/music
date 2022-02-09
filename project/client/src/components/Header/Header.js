import React from 'react';
import {Outlet} from "react-router-dom";

import s from './../../styles/Header.module.scss'
import c from './../../styles/common.module.scss'


const Header = () => {
    return (
        <div className={c.gridContainer}>
            <div className={`${c.gridH} ${s.header}`}>

            </div>
            <div className={c.gridC}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Header;