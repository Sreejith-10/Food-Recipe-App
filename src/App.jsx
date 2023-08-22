import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import Menu from "./components/Menu/Menu";

function App() {
	return (
		<div className='food-page'>
			<div className='page-header'>
				<Header />
			</div>
			<div className='page-content'>
				<Menu />
			</div>
			<div className='page-footer'>
				<Footer />
			</div>
		</div>
	);
}

export default App;
