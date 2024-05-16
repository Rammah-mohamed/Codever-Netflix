import "./watch.css";
import { ArrowBackIos } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { fetchFromApi } from "../../utils/fetchFromApi";

const Watch = () => {
	const [url, setUrl] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		fetchFromApi(`movie/${id}`).then((result) => setUrl(result?.movie?.youtube_trailer));
	}, [id]);

	const opts = {
		height: "720",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	return (
		url && (
			<div className='watch'>
				<Link to={"/"}>
					<ArrowBackIos className='arrow' />
				</Link>
				<YouTube videoId={url?.slice(url?.indexOf("=") + 1)} opts={opts} />
			</div>
		)
	);
};

export default Watch;
