import "./Main.css";
import heroImg from "/images/hero.png"

export default function Main() {
	return (
		<section className="main-section">
			<img className="hero-image" src={heroImg} alt="Image not found" />
			<h1 className="hero-h1">welcome</h1>
			<p className="hero-description">
				Your ultimatie source for a comprehensive list of food ingredients. Find
				your needed ingrediants and meals easily here!
			</p>
			<div className="hero-btn">
				<a href="" className="hero-btn-a">Know More</a>
			</div>
		</section>
	);
}
