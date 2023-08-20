import React, {useEffect, useState} from "react";
import Loader from "../components/Loader/Loader"
export const AllMenuContext = React.createContext();

export default function MenuContext(props) {
	let [menu, setMenu] = useState([]);
	let [loading, setLoading] = useState(false);

	async function callMenuApi() {
		setLoading(true);
		const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
		let menuData = await fetch(API_URL);
		let data = await menuData.json();
		setMenu(data.meals);
		setLoading(false);
	}

	useEffect(() => {
		callMenuApi();
	}, []);

	return (
		<AllMenuContext.Provider value={menu}>
			{!loading ? props.children : <Loader />}
		</AllMenuContext.Provider>
	);
}
