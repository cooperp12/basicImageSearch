import axios from 'axios';
import config from './config.json';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${config.unsplash.access_key}`
    },
    params: {
      query: term,
    }
  });

  return response.data.results;
};

export default searchImages;
