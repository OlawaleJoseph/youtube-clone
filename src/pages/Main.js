import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import VideoList from '../components/VideoSection';
import '../css/main.css'
import { getVideos } from '../utils/api';


function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getVideos();
      setMovies(movies);
    }

    fetchMovies();
  },[])


  return (
    <main className='flex-1 main'>
      <Banner />
      <div className="videos__list">
       <VideoList movies={movies} />
      </div>
    </main>
  )
}

export default Main
