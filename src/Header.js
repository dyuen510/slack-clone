import React from 'react'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTimeOutlined';
import SearchIcon from '@material-ui/icons/SearchRounded';
import HelpOutlineIcon from '@material-ui/icons/HelpOutlineOutlined';
import './Header.css';


function Header() {
    return (
        <div className = 'header'>
            <div className = 'header__left'>
            <Avatar
                className ='header__avatar'
                alt='David Yuen'
                src=''
            />
            <AccessTimeIcon />
            </div>
            <div className ='header__search'>
            <SearchIcon />
            <input placeholder='Search'/>
            </div>
            <div className = 'header__right'>
            <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
