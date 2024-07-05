import axios from "axios";

const options = {
  method: 'GET',
  url: '////',
  params: {
    geo: 'IN',
    lang: 'en'
  },
  headers: {
    'x-rapidapi-key':'ENTER YOUR OWN KEY',
    'x-rapidapi-host':'SAME FOR IT' 
  }
};



const BASE_URL = "/////";

export const getPlaylistDataFromApi = async (query) => {
  const url = query.split(" ").join("%20");
  const { data } = await axios.request(
    `${BASE_URL}/search?query=${url}&type=playlist`,
    options
  );
  return data?.data;
};

export const getPlaylistItemsFromId = async (id) => {
  const { data } = await axios.request(
    `${BASE_URL}/playlist?id=${id}`,
    options
  );
  return data?.data;
};

export const getSearchDataFromApi = async (query) => {
  const url = query.split(" ").join("%20");
  const { data } = await axios.request(
    `${BASE_URL}/search?query=${url}`,
    options
  );
  return data?.data;
};

export const createHomeData = async (playlistsKeyWords) => {
  console.log(true);
  const HomeData = [];
  for (const item of playlistsKeyWords) {
    const playlists = await getPlaylistDataFromApi(item.title);
    console.log(playlists);
    const data = { [item.title]: playlists };
    HomeData.push(data);
  }
  return HomeData;
};


