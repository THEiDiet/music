import React from 'react';
import {Outlet} from "react-router-dom";
import s from './../../styles/Header.module.scss'
import c from './../../styles/common.module.scss'
import {useDispatch, useSelector} from "react-redux";
import darkTheme from "../../styles/darkTheme.module.scss";
import lightTheme from "../../styles/lightTheme.module.scss";
import {toggleTheme} from "../../store/commonSettingsSlice";


const Header = () => {
    let theme = useSelector(st => st.settings.theme)
    const dispatch = useDispatch()
    const th = theme === 'dark' ? darkTheme : lightTheme
    const themeHandler = ()=>{
        dispatch(toggleTheme())
    }
    console.log(window.document.documentElement.scrollHeight);
    return (
        <div className={c.gridContainer}>
            <div className={`${c.gridH} ${s.header}`}>
                <button onClick={themeHandler}>change theme</button>
            </div>
            <div className={c.gridC} style={{height:window.document.documentElement.scrollHeight - 260}}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Header;