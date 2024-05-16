import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Listitem from "../../components/listitem/Listitem";
import "./search.css";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../../utils/fetchFromApi";

const Search = () => {
	const [data, setData] = useState(null);
	const { searchTerm } = useParams();
	useEffect(() => {
		fetchFromApi(`search?query=${searchTerm}`).then((result) => setData(result?.contents));
	}, [searchTerm]);

	return (
		data && (
			<div className='search'>
				<Navbar />
				<h1>Search result for: {searchTerm}</h1>
				<div className='itemBox'>
					{data?.map((item, id) => (
						<Listitem className='item' key={id} data={item} />
					))}
				</div>
			</div>
		)
	);
};

export default Search;
