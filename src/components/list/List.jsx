import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Listitem from "../listitem/Listitem";
import "./list.css";
import { useRef, useState } from "react";

const List = ({ data }) => {
	let [index, setIndex] = useState(0);
	const moveRef = useRef();
	const mobileScreen = window.innerWidth < 768;
	const midScreen = window.innerWidth >= 768 && window.innerWidth < 991;
	const mobile = {
		display: index < data?.movies?.length - 2 ? "block" : "none",
	};

	const mid = {
		display: index < data?.movies?.length - 3 ? "block" : "none",
	};

	const larg = {
		display: index < data?.movies?.length - 5 ? "block" : "none",
	};

	let slide = (direction) => {
		if (direction === "left") {
			if (mobileScreen) {
				moveRef.current.style.transform = ` translateX(-${(index - 1) * 200 + (index - 1) * 5}px)`;
				setIndex((index -= 1));
			} else if (midScreen) {
				moveRef.current.style.transform = ` translateX(-${(index - 1) * 260 + (index - 1) * 5}px)`;
				setIndex((index -= 1));
			} else {
				moveRef.current.style.transform = ` translateX(-${(index - 1) * 300 + (index - 1) * 5}px)`;
				setIndex((index -= 1));
			}
		} else if (direction === "right") {
			if (mobileScreen) {
				moveRef.current.style.transform = ` translateX(-${index * 200 + (205 + index * 5)}px)`;
				setIndex((index += 1));
			} else if (midScreen) {
				moveRef.current.style.transform = ` translateX(-${index * 260 + (265 + index * 5)}px)`;
				setIndex((index += 1));
			} else {
				moveRef.current.style.transform = ` translateX(-${index * 300 + (305 + index * 5)}px)`;
				setIndex((index += 1));
			}
		}
	};
	return (
		data && (
			<div className='list'>
				<h1>{data?.title} :</h1>
				<div className='wrapper'>
					<ArrowBack
						className='arrow left'
						onClick={() => slide("left")}
						style={{ display: index > 0 ? "block" : "none" }}
					/>
					<div className='container' ref={moveRef} id={index}>
						{data?.movies?.map((item, id) => (
							<Listitem key={id} data={item} />
						))}
					</div>
					<ArrowForward
						className='arrow right'
						onClick={() => slide("right")}
						style={mobileScreen ? mobile : midScreen ? mid : larg}
					/>
				</div>
			</div>
		)
	);
};

export default List;
