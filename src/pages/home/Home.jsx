import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { fetchFromApi } from "../../utils/fetchFromApi";

const Home = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchFromApi("home").then((result) => setData(result));
	}, []);
	return (
		<div className='home'>
			<Navbar />
			{data && <Featured type={"movie"} data={data} />}
			{data?.map((item, id) => (
				<List key={id} data={item} />
			))}
		</div>
	);
};

export default Home;
