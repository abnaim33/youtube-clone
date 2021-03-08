import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
    const [searchInput, setSearchInput] = useState(' ')
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <Link to="/">
                    <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
                </Link>
            </div>
            <div className="header_middle">
                <input value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder="Search" className="header_input" type="text" />

                <Link to={`/search/${searchInput}`} >
                    <SearchIcon className="header_searchIcon" />
                </Link>


            </div>
            <div className="header_right">
                <VideoCallIcon className="header_right_icon" />
                <AppsIcon className="header_right_icon" />
                <NotificationsIcon className="header_right_icon" />
                <Avatar />
            </div>



        </div>
    );
};

export default Header;