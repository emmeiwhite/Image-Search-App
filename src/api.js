import axios from "axios";

const url = "https://api.unsplash.com/search/photos";

const searchImages = async () => {
  const response = await axios.get(url, {
    headers: {
      Authorization: "Client-ID ViAE7ThQNzvGcwFLCRh39sCtj3VAD_qFnsvTjxVmgw4",
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);
  return response;
};

export default searchImages;
