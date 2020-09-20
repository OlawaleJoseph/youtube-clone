import React from 'react';
import Video from './Video';
import '../css/videoSection.css'

function VideoSection({ movies, title = 'Breaking news', bordered }) {
  return (
    <div className={`videoSection ${bordered && 'videoSection__border'}`}>
      <h3 className='videoSection__title'>{title}</h3>
      <div  className='videoSection flex'>
        {movies.map((movie) => (
          <Video key={movie.id} movie={movie} />
        ))}  
      </div>
    </div>
  )
}

export default VideoSection
