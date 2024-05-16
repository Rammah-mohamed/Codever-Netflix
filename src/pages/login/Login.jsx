import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='login'>
			<div className='overlay'></div>
			<img
				alt=''
				aria-hidden='true'
				data-uia='nmhp-card-hero+background+image'
				src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/3d8c94f0-38d7-4077-b3d8-1481a49d7355/EG-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_91cbceff-80d5-4440-8053-e9e72611f2a3_small.jpg'
				srcset='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/3d8c94f0-38d7-4077-b3d8-1481a49d7355/EG-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_91cbceff-80d5-4440-8053-e9e72611f2a3_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/3d8c94f0-38d7-4077-b3d8-1481a49d7355/EG-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_91cbceff-80d5-4440-8053-e9e72611f2a3_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/3d8c94f0-38d7-4077-b3d8-1481a49d7355/EG-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_91cbceff-80d5-4440-8053-e9e72611f2a3_large.jpg 1800w'
				class='default-ltr-cache-1jxs5rh e13sg9vu0'
			/>
			<div className='top'>
				<Link to={"/"} style={{ textDecoration: "none" }}>
					<h1>Netflix</h1>
				</Link>
				<Link to={"/signin"}>
					<span>Sign In</span>
				</Link>
			</div>
			<div className='mid'>
				<p>Unlimited movies, TV shows, and more.</p>
				<p>Watch anywhere, Cancle anytime.</p>
				<p>Ready to watch? Enter your email to create or restart your membership.</p>
				<div className='mail'>
					<input type='email' placeholder='Email or mobile phone' />
					<span>Get Started</span>
				</div>
			</div>
		</div>
	);
};

export default Login;
