import axios from 'axios';


const api_key = 'AIzaSyDF0yQ86UTLWHoxpSTzW-m-KSxfGXu6zEw';

export const getVideos = async (region='US', maxRes = 8) => {
  const baseUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${region}&maxResults=${maxRes}`;

  const url = `${baseUrl}&key=${api_key}`;
  const { data } = await axios.get(url);

  return data.items
}

export const getChannelImage = async (channelId) => {
  const url =  `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${api_key}`;

  const { data }  = await axios.get(url);

  const channelImageString = data.items[0].snippet.thumbnails.default.url
  return channelImageString;
}