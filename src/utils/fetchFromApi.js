import axios from "axios";
const BASE_URL = "https://movies-api14.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bff455d4dfmsh196bf9b08bacb33p1efd8bjsn485fc9dac3a6",
    "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
  },
};

export const fetchFromApi = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/${query}`, options);
  return data;
};
