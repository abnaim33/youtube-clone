import { Avatar } from '@material-ui/core';
import React from 'react';
import './ChannelRow.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const ChannelRow = ({ image, channel, noOfVideos, subs, verified, description }) => {
    return (
        <div className="channelRow">
            <Avatar className="channelRow_logo"
                alt={channel} src={image}
            />
            <div className="channelRow_text">
                <h4>{channel} {verified && <CheckCircleIcon />}</h4>
                <p>
                    {subs} subscribers . {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>


        </div>
    );
};

export default ChannelRow;