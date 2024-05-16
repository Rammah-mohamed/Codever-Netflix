import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Signin from "./pages/signin/Signin";
import Details from "./pages/details/Details";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import { useEffect, useState } from "react";
import Search from "./pages/search/Search";
import { fetchFromApi } from "./utils/fetchFromApi";

function App() {
	const [movies, setMovies] = useState(null);
	const [series, setSeries] = useState(null);

	useEffect(() => {
		fetchFromApi("movies").then((result) => setMovies(result.movies));
		fetchFromApi("shows").then((result) => setSeries(result.movies));
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/watch/:id' element={<Watch />} />
				<Route path='/details/:id' element={<Details />} />
				<Route path='/search/:searchTerm' element={<Search />} />
				<Route path='/movies' element={<Movies data={movies} />} />
				<Route path='/series' element={<Series data={series} />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signin' element={<Signin />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
