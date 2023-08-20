import "./Footer.css";
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from "react-icons/fa";

export default function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<div className="social">
					<a href="" className="social-logo">
						<FaFacebook size="2em" color="white" />
					</a>
					<a href="" className="social-logo">
						<FaInstagram size="2em" color="white" />
					</a>
					<a href="" className="social-logo">
						<FaYoutube size="2em" color="white" />
					</a>
					<a href="" className="social-logo">
						<FaTwitter size="2em" color="white" />
					</a>
				</div>
				<div className="footer-details">
					<a href="">About</a>
				</div>
				<div className="footer-copy">
					<h1>CopyRight 2023: Develpoed by Sreejith</h1>
				</div>
			</div>
		</footer>
	);
}
