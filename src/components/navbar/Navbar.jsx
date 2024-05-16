import { ArrowDownward, Notifications, Search } from "@mui/icons-material";
import "./navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [show, setShow] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm) {
			navigate(`/search/${searchTerm}`);
		}
		setSearchTerm("");
	};

	window.onscroll = () => {
		window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
		return () => (window.scrollY = null);
	};
	return (
		<div className={isScrolled ? "navbar show" : "navbar"}>
			<div className='container'>
				<div className='left'>
					<Link to={"/"} style={{ textDecoration: "none" }}>
						<span className='logo'>Netflix</span>
					</Link>
					<Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
						<span className='link'>Homepage</span>
					</Link>
					<Link to={"/movies"} style={{ textDecoration: "none", color: "white" }}>
						<span className='link movies-page'>Movies</span>
					</Link>
					<Link to={"/series"} style={{ textDecoration: "none", color: "white" }}>
						<span className='link series-page'>Series</span>
					</Link>
					<span className='link'>New And Popular</span>
					<span className='link'>My List</span>
				</div>
				<div className='right'>
					<form className='inputBox' onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='Enter the Movie or tv show title'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							style={{ display: show && "block" }}
							autoFocus
						/>
						<span className='icon search-icon' onClick={() => setShow(!show)}>
							<Search />
						</span>
					</form>
					<Link to={"/login"}>
						<img
							src={"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"}
							alt=''
						/>
					</Link>
					<Notifications className='icon' />
					<Link to={"/signin"}>
						<ArrowDownward className='icon' style={{ color: "white" }} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
