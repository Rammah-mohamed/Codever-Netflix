import "./movies.css";
import "../../app.css";
import Listitem from "../../components/listitem/Listitem";
import Navbar from "../../components/navbar/Navbar";

const Movies = ({ data }) => {
	return (
		data && (
			<div className='movies'>
				<Navbar />
				<h1>Movies</h1>
				<p>
					Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or
					anywhere in-between. So many titles, so much to experience.
				</p>
				<div className='itemBox'>
					{data?.slice(0, 40)?.map((item, id) => (
						<Listitem className='item' key={id} data={item} />
					))}
				</div>
			</div>
		)
	);
};

export default Movies;
