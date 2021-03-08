import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneIcon />
                <h2>FILTER</h2>

            </div>
            <hr />
            <ChannelRow
                image="https://media-exp1.licdn.com/dms/image/C5603AQHs21Hn1Dcwhw/profile-displayphoto-shrink_800_800/0/1607396829505?e=1620864000&v=beta&t=wV81tA2ngZYgn9uzbAPHq5B7B6HPyRiAr5GUcYNrAOU"
                channel="Naim Hossen"
                verified
                subs="500K"
                noOfVideos={100}
                description="we teach you how to master in web programing ...So keep join with us"
            /> <hr />
            <VideoRow
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyyWrtjWP0EIfLyFDZOuUktRxmlSaZOFVgg&usqp=CAU"

                title="How you can make responsive design with html css bootstrap and javascript"
                views="1M"
                subs="500K"
                channel="Naim Hossen"
                description="we teach you how to master in web programing ...So keep join with us"
                timestamp="1 minute ago"
            />
        </div>

    );
};

export default SearchPage;