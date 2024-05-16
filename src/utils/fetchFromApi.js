import axios from "axios";
const BASE_URL = "https://movies-api14.p.rapidapi.com";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "bfaee7d883mshb2114ef5350b018p1978ddjsneef119ed3fe5",
		"X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
	},
};

export const fetchFromApi = async (query) => {
	const { data } = await axios.get(`${BASE_URL}/${query}`, options);
	return data;
};
