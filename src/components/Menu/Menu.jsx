/* eslint-disable no-unused-vars */
import "./Menu.css";
import SpecialItems from "../Special/SpecialItems";
import FilteredDishes from "../FilteredDishes/FilteredDishes";
import SearchDish from "../SearchDish/SearchDish";
import MenuContext from "../../context/MenuContext";
import Main from "../Main/Main";

export default function Menu() {
	return (
		<div>
			<MenuContext>
				<Main />
				<SpecialItems />
				<FilteredDishes />
				<SearchDish />
			</MenuContext>
		</div>
	);
}
