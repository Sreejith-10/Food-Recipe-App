import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import Menu from "./components/Menu/Menu";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
}

export default App;
