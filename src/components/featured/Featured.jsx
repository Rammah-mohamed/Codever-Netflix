import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./featured.css";
import { InfoOutlined, PlayCircle } from "@mui/icons-material";
import { TypeContext } from "../../context/typeContext";
const Featured = ({ data }) => {
	let randomId = Math.floor(Math.random() * data[0]?.movies?.length);
	const { dispatch } = useContext(TypeContext);

	return (
		data && (
			<div className='featured'>
				<div className='overlay'></div>
				<div className='btns'>
					<Link to={"/movies"}>
						<button>Movies</button>
					</Link>
					<Link to={"/series"}>
						<button>Series</button>
					</Link>
				</div>
				<img src={data[0]?.movies[randomId]?.backdrop_path} alt='' />
				<div className='info'>
					<h1>{data[0]?.movies[randomId]?.title}</h1>
					<div className='desc'>{data[0]?.movies[randomId]?.overview?.slice(0, 300)}</div>
					<div className='btns'>
						<Link
							to={`/watch/${data[0]?.movies[randomId]?._id}`}
							className='btn play'
							style={{ textDecoration: "none" }}>
							<PlayCircle className='icon' />
							<span>Play</span>
						</Link>
						<Link
							to={`/details/${data[0]?.movies[randomId]?._id}`}
							className='btn deatiles'
							style={{ textDecoration: "none" }}>
							<InfoOutlined className='icon' />
							<span onClick={() => dispatch({ type: data[0]?.movies[randomId]?.contentType })}>
								More
							</span>
						</Link>
					</div>
				</div>
			</div>
		)
	);
};

export default Featured;
