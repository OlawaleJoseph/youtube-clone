import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar} from '@material-ui/core';
import { formatDistance, subDays } from 'date-fns';
import { getChannelImage } from '../utils/api'
import numeral from 'numeral';
import '../css/video.css';

function Video({ movie }) {
  const [playVideo, setPlayVideo] = useState(false);
  const [zIndex, setZIndex] = useState(false);

  const stopPlay = (e) => {
    setZIndex(false);
    setPlayVideo(false);
  }

 

  const handleHover = (e) => {
    setZIndex(true);
    setPlayVideo(true);

    setTimeout(() => {
      setZIndex(false);
      setPlayVideo(false);
    }, 3000);
  };

  console.log(getChannelImage(movie.snippet.channelId))

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={stopPlay}
      className='video'>
      <div className='vid-wrapper'>
        <img
          className='vid-thumbnail'
          src={movie.snippet.thumbnails.standard.url}
          alt="Video Poster"/>
        <div
          className={`player-wrapper ${zIndex && 'z-100'}`}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${movie.id}`}
            width='100%'
            height='100%'
            light={false}
            muted
            playing={playVideo}
            loop={!playVideo}
          />
        </div>
      </div>
      <div className="video__info flex">
      <Avatar alt="Channel Avatar" src='' />
      <div className='video__details flex justify-between'>
        <div>
        <h3 className='video__title'>{movie.snippet.title}</h3>
        <h5 className='video__channel'>{movie.snippet.channelTitle}</h5>
        <p className='flex align-center'><span className='uppercase video__count'>{numeral(movie.statistics.viewCount).format('0a')}</span>views<span className='dot'>&middot;</span> {formatDistance(subDays(new Date(movie.snippet.publishedAt), 0), new Date())} ago</p>
        </div>
        <MoreVertIcon className='video__ellipses' />
      </div>
      </div>
    </div>
  )
}

export default Video
