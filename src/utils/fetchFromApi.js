import axios from "axios";
const BASE_URL = "https://movies-api14.p.rapidapi.com";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "34adb3cd23msh7622a6b5e50cc10p1cc2dejsnce686405399a",
		"X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
	},
};

export const fetchFromApi = async (query) => {
	const { data } = await axios.get(`${BASE_URL}/${query}`, options);
	return data;
};
