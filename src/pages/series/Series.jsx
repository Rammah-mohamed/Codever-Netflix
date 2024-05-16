import Listitem from "../../components/listitem/Listitem";
import Navbar from "../../components/navbar/Navbar";
import "./series.css";
import "../../app.css";

const Series = ({ data }) => {
	return (
		data && (
			<div className='series'>
				<Navbar />
				<h1>Series</h1>
				<p>
					These days, the small screen has some very big things to offer. From sitcoms to dramas to
					travel and talk shows, these are all the best programs on TV.
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

export default Series;
