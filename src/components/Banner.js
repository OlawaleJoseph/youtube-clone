import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import '../css/banner.css';
import play from '../assets/images/youtube_play.jpeg'
import music from '../assets/images/youtube_music.png'

function Banner() {

  const [closeBanner, setCloseBanner] = useState(false);
  const closeBtn = () => setCloseBanner(true);

  return (
    <div className={`banner position-relative ${closeBanner && 'd-none'}`}>
      <img className='banner__play_image position-absolute' src={play} alt="banner"/>
      <div className='flex position-relative banner__close_icon' >
          <CloseIcon onClick={closeBtn} />
        </div>
      <div className='position-relative'>
        <div>
          <img className='banner__music_img' src={music} alt="youtube music logo"/>
          <h2 className='banner__message'>Our new music streaming service is here</h2>
          <button className='uppercase banner__button'>let's go</button>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
