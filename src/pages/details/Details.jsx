import "./details.css";
import "../../app.css";
import Navbar from "../../components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { TypeContext } from "../../context/typeContext";
import { fetchFromApi } from "../../utils/fetchFromApi";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import StarIcon from "@mui/icons-material/Star";

const Details = () => {
	const [data, setData] = useState(null);
	const [infoType, setInfoType] = useState("Overview");
	const [active, setActive] = useState("Overview");
	const { type } = useContext(TypeContext);
	const { id } = useParams();
	const { dispatch } = useContext(TypeContext);
	useEffect(() => {
		if (type && id) {
			fetchFromApi(`${type}/${id}`).then((result) => setData(result));
		}
	}, [type, id]);

	const handleClick = (type) => {
		setInfoType(type);
		switch (type) {
			case "Overview":
				setActive("Overview");
				break;
			case "Episodes":
				setActive("Episodes");
				break;
			case "Trailer":
				setActive("Trailer");
				break;
			case "More":
				setActive("More");
				break;
			default:
				return "";
		}
	};

	return (
		data && (
			<div className='details'>
				<Navbar />
				<div className='detailsBox'>
					<div className='imgBox'>
						<img src={data[`${type}`].poster_path} alt='poster' />
					</div>
					<div className='infoBox'>
						<div className='top'>
							<div className='title'>
								<h1>{data[`${type}`].title}</h1>
								<p>
									{type === "movie"
										? "Release Date : " + data[`${type}`].release_date
										: "First Aired : " + data[`${type}`].first_aired}
									{type === "show" &&
										" | Number Of Seasons : " + data?.seasons?.length + " Seasons"}
								</p>
							</div>

							<div className='rate'>
								<StarIcon
									className='star'
									style={{ fontSize: "35px", marginRight: "5px", color: "goldenrod" }}
								/>
								{data[`${type}`].vote_average?.toFixed(1)}
							</div>
						</div>
						<div className='bottom'>
							<ul className='infoBar'>
								<li
									onClick={() => handleClick("Overview")}
									style={{ color: active === "Overview" && "#ff0e0e" }}>
									Overview
								</li>
								{type === "show" && (
									<li
										onClick={() => handleClick("Episodes")}
										style={{ color: active === "Episodes" && "#ff0e0e" }}>
										Episodes
									</li>
								)}
								<li
									onClick={() => handleClick("Trailer")}
									style={{ color: active === "Trailer" && "#ff0e0e" }}>
									Trailer
								</li>
								{type === "movie" && (
									<li
										onClick={() => handleClick("More")}
										style={{ color: active === "More" && "#ff0e0e" }}>
										More Like This
									</li>
								)}
							</ul>
							{infoType === "Overview" ? (
								<div className='overview'>
									<p>{data[`${type}`].overview}</p>
									<h1>{type === "movie" ? "Similar Movies :" : "Similar Series :"}</h1>
									<div className='similar'>
										{type === "movie" &&
											data?.similarMovies?.slice(0, 3).map((item, id) => (
												<Link
													className='box'
													key={id}
													to={`/details/${item?._id}`}
													style={{ width: "100%" }}>
													<div onClick={() => dispatch({ type: item?.contentType })}>
														<img src={item?.backdrop_path} alt='' />
														<div className='info'>{item?.original_title}</div>
													</div>
												</Link>
											))}
										{type === "show" &&
											data?.seasons
												?.slice(data?.seasons?.length - 1)[0]
												?.episodes?.slice(0, 3)
												?.map((item, id) => (
													<div className='box' key={id}>
														<img src={item?.thumbnail_path} alt='' />
														<div className='info'>
															<div className='episode'>
																{"S" + item?.season_number + "E" + item?.episode_number}
															</div>
															<div className='h2'>{item?.title}</div>
														</div>
													</div>
												))}
									</div>
								</div>
							) : infoType === "Episodes" ? (
								<div className='episodes'>
									{type === "show" &&
										data?.seasons
											?.slice(data?.seasons?.length - 1)[0]
											?.episodes?.slice(3, 9)
											?.map((item, id) => (
												<div className='box' key={id}>
													<img src={item?.thumbnail_path} alt='' />
													<div className='info'>
														<div className='episode'>
															{"S" + item?.season_number + "E" + item?.episode_number}
														</div>
														<div className='h2'>{item?.title}</div>
													</div>
												</div>
											))}
								</div>
							) : infoType === "Trailer" ? (
								<div className='trailer'>
									<YouTube
										className='video'
										videoId={data[`${type}`].youtube_trailer?.slice(
											data[`${type}`].youtube_trailer?.indexOf("=") + 1
										)}
									/>
								</div>
							) : (
								type === "movie" &&
								infoType === "More" && (
									<div className='more'>
										{data?.similarMovies?.slice(3, 9).map((item, id) => (
											<Link
												className='box'
												key={id}
												to={`/details/${item?._id}`}
												style={{ width: "100%" }}>
												<div onClick={() => dispatch({ type: item?.contentType })}>
													<img src={item?.backdrop_path} alt='' />
													<div className='info'>{item?.original_title}</div>
												</div>
											</Link>
										))}
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default Details;
