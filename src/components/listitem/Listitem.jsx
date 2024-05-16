import "./listitem.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TypeContext } from "../../context/typeContext";

const Listitem = ({ data }) => {
	const { dispatch } = useContext(TypeContext);
	const [isHovered, setIsHoverd] = useState(false);

	return (
		data && (
			<Link to={`/details/${data?._id}`}>
				<div
					className='listitem'
					onMouseEnter={() => setIsHoverd(true)}
					onMouseLeave={() => setIsHoverd(false)}
					onClick={() => dispatch({ type: data?.contentType })}>
					<img src={data?.poster_path} alt='' />
					{isHovered && (
						<div className='detailsBox'>
							<div className='detail'>
								<p>{data?.overview.slice(0, 200)}</p>
								<div className='genre'>
									{data?.genres?.map((item, id) => (
										<span key={id}>{item} </span>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</Link>
		)
	);
};

export default Listitem;
