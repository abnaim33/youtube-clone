import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarRow from './SidebarRow';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library"></SidebarRow>
            <SidebarRow Icon={HistoryIcon} title="History"></SidebarRow>
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"></SidebarRow>
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"></SidebarRow>
            <SidebarRow Icon={ThumbUpIcon} title="Liked Videos"></SidebarRow>
            <SidebarRow Icon={ExpandMoreIcon} title="Show More"></SidebarRow>
        </div>
    );
};

export default Sidebar;