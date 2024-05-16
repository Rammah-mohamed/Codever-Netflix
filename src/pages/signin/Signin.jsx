import "./signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
	return (
		<div className='signin'>
			<div className='overlay'></div>
			<img
				class='concord-img vlv-creative'
				src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/3d8c94f0-38d7-4077-b3d8-1481a49d7355/EG-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_91cbceff-80d5-4440-8053-e9e72611f2a3_small.jpg'
				srcset='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/3d8c94f0-38d7-4077-b3d8-1481a49d7355/EG-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_91cbceff-80d5-4440-8053-e9e72611f2a3_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/3d8c94f0-38d7-4077-b3d8-1481a49d7355/EG-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_91cbceff-80d5-4440-8053-e9e72611f2a3_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/3d8c94f0-38d7-4077-b3d8-1481a49d7355/EG-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_91cbceff-80d5-4440-8053-e9e72611f2a3_large.jpg 1800w'
				alt=''
			/>
			<Link to={"/"}>
				<h1>Netflix</h1>
			</Link>
			<div className='info'>
				<h2>Sign In</h2>
				<input type='email' placeholder='Email or mobile phone' />
				<input type='password' placeholder='Password' />
				<span className='btn'>Sign In</span>
				<div className='register'>
					<span>New to netflix?</span>
					<Link to={"/login"} className='link'>
						Sign up now
					</Link>
				</div>
				<div>
					<div className='protect'>
						<span>This page is protected by google reCHAPTCHA to ensure you're not a bot </span>
						<Link className='link'>Learn more</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signin;
