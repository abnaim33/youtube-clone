import React from 'react';
import './RecommendedVideos.css'
import VideoCard from './VideoCard';
import myPic from '../../Images/myPic.png';

const RecommendedVideos = () => {
    return (
        <div className="RecommendedVideos">
            <h2> this is recommended video</h2>

            <div className="recommendedVideos_videos">
                <VideoCard image="https://www.edureka.co/blog/wp-content/uploads/2019/06/What-is-HTML.jpg" title="All about HTML" views="1M Views" timestamp="1 days ago" channel="Naim Hossen" channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DJA0fGvlEyOB9XGueTX1scSkcl8CFLYH3g&usqp=CAU"></VideoCard>
                <VideoCard image="https://sabe.io/classes/css/hero.png" title="Make beautiful design by css " views="1.5M Views" timestamp="2 days ago" channel="Naim Hossen" channelImage="https://hackr.io/tutorials/learn-html-5/logo/logo-html-5?ver=1555389548"></VideoCard>
                <VideoCard image="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" title="JS tutorials for beginner" views="3M Views" timestamp="3 days ago" channel="Naim Hossen" channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2hiUsLhUUItBPFNoOHrdmYMfziBmkSHRdQ&usqp=CAU"></VideoCard>
                <VideoCard image="https://i.ytimg.com/vi/ypXY7wtBjck/maxresdefault.jpg" title="How to use Bootstrap" views="995k Views" timestamp="1 week ago" channel="Naim Hossen" channelImage="{myPic.png}"></VideoCard>
                <VideoCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTk9sW-niLW0rsgPlzOHDDd2IDc8ChbIAYw&usqp=CAU" title="Top JS framework that you should know..." views="500k Views" timestamp="1 days ago" channel="Naim Hossen" channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DJA0fGvlEyOB9XGueTX1scSkcl8CFLYH3g&usqp=CAU"></VideoCard>
                <VideoCard image="https://static.frontendmasters.com/assets/courses/2018-11-28-node-js/thumb@2x.jpg" title="How to use Node.js" views="200k Views" timestamp="1 month ago" channel="Naim Hossen" channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DJA0fGvlEyOB9XGueTX1scSkcl8CFLYH3g&usqp=CAU"></VideoCard>
                <VideoCard image="https://i.ytimg.com/vi/JPT3bFIwJYA/maxresdefault.jpg" title="React js full video" views="700k Views" timestamp="6 days ago" channel="Naim Hossen" channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DJA0fGvlEyOB9XGueTX1scSkcl8CFLYH3g&usqp=CAU"></VideoCard>
                <VideoCard image="https://cdn.educba.com/academy/wp-content/uploads/2018/12/Is-MongoDB-NoSQL.jpg" title="How to use Mongodb.." views="150k Views" timestamp="2 week ago" channel="Naim Hossen" channelImage={myPic.png}></VideoCard>
                <VideoCard image="https://blog.back4app.com/wp-content/uploads/2020/04/The-best-heroku-alternatives-in-2020-1057x515.png" title="How to host website for free" views="200k Views" timestamp="5 days ago" channel="Naim Hossen" channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DJA0fGvlEyOB9XGueTX1scSkcl8CFLYH3g&usqp=CAU"></VideoCard>
                <VideoCard image="https://i.ytimg.com/vi/iosNuIdQoy8/maxresdefault.jpg" title="What is firebase?" views="600k Views" timestamp="4 days ago" channel="Naim Hossen" channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DJA0fGvlEyOB9XGueTX1scSkcl8CFLYH3g&usqp=CAU"></VideoCard>
                <VideoCard image="https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg" title="What is MERN Stack development? Let me explain" views="700k Views" timestamp="3 week ago" channel="Naim Hossen" channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DJA0fGvlEyOB9XGueTX1scSkcl8CFLYH3g&usqp=CAU"></VideoCard>
                <VideoCard image="https://res.cloudinary.com/practicaldev/image/fetch/s--i_sb3chq--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/fk0849hvg2rt13bpqhjy.jpg" title="Advanced tutorial about Github" views="300k Views" timestamp="12.00 AM" channel="Naim Hossen" channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DJA0fGvlEyOB9XGueTX1scSkcl8CFLYH3g&usqp=CAU"></VideoCard>
            </div>
        </div>
    );
};

export default RecommendedVideos;