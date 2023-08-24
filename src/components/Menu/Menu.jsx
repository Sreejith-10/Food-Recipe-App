/* eslint-disable no-unused-vars */
import "./Menu.css";
import SpecialItems from "../Special/SpecialItems";
import FilteredDishes from "../FilteredDishes/FilteredDishes";
import SearchDish from "../SearchDish/SearchDish";
import MenuContext from "../../context/MenuContext";
import Main from "../Main/Main";
import {Route, Routes} from "react-router-dom";

export default function Menu() {
	return (
		<div>
			<MenuContext>
				<Main />
				<Routes>
					<Route path='/special' element={<SpecialItems />} />
					<Route path='/filter' element={<FilteredDishes />} />
					<Route path='/search' element={<SearchDish />} />
				</Routes>
			</MenuContext>
		</div>
	);
}
