import {useContext, useState, useEffect} from "react";
import "./FilteredDishes.css";
import Pagintaion from "../Pagination/Pagintaion";
import CardDish from "../CardDish/CardDish";
import PopUp from "../PopUp/PopUp";
import {AllMenuContext} from "../../context/MenuContext";

export default function FilteredDishes(props) {
	let [dish, setDish] = useState(props.dish);
	let [dishFilter, setDishFilter] = useState([]);
	let [active, setActive] = useState();
	let [currentPage, setCurrentPage] = useState(1);
	let [itemsPerPage, setItemsPerPage] = useState(4);
	let [pageNumber, setPageNumber] = useState(1);
	let [showPopUp, setShowPopUp] = useState(false);
	let [popUpData, setPopUpData] = useState([]);
	let lastIndexofPage = currentPage * itemsPerPage;
	let firstIndexofPage = lastIndexofPage - itemsPerPage;
	let slicedPages = dishFilter.slice(firstIndexofPage, lastIndexofPage);
	const allMenu = useContext(AllMenuContext);
	let [cat, setCat] = useState([]);

	async function filterMenuItems() {
		const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
		try {
			fetch(API_URL)
				.then((data) => data.json())
				.then((data) => setCat(data.categories));
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		filterMenuItems();
	}, []);

	function showPopUpHandler(val) {
		setShowPopUp(true);
		setPopUpData(val);
	}
	function closePopUp() {
		setShowPopUp(false);
	}

	function filterData(cat) {
		setPageNumber(1);
		setActive(cat);
		let filterDishes = allMenu
			.filter((val) => {
				return val.strCategory === cat;
			})
			.map((val) => {
				return <CardDish val={val} showPopUpHandler={showPopUpHandler} />;
			});

		setDishFilter(filterDishes);
	}
	let filterItems = cat.map((val) => {
		return (
			<li
				key={val.index}
				className='btn-filter'
				id={val.strCategory === active ? "first-active" : ""}>
				<a
					onClick={() => {
						filterData(val.strCategory);
					}}>
					{val.strCategory}
				</a>
			</li>
		);
	});

	return (
		<section className='filter-section'>
			{showPopUp && (
				<PopUp
					closePopUp={closePopUp}
					popUpData={popUpData}
					addToFavorite={addToFavorite}
				/>
			)}
			<div className='filter-dishes'>
				<h1 style={{color: "#ef591d"}} className='filter-section-h1'>
					Filter your dish
				</h1>
				<h3 className='filter-section-h3'>
					Select your dish according to the category
				</h3>
				<div className='filter-selector'>
					<ul className='filter-ul'>{filterItems}</ul>
				</div>
				<div className='filter-item-section'>
					<ul className='filter-item-section-ul'>
						{dishFilter.length === 0 ? (
							<h1 className='no-item'>No item found !</h1>
						) : (
							slicedPages
						)}
					</ul>
				</div>
			</div>
			<Pagintaion
				setPageNumber={setPageNumber}
				pageNumber={pageNumber}
				dishFilter={dishFilter}
				setCurrentPage={setCurrentPage}
				itemsPerPage={itemsPerPage}
			/>
		</section>
	);
}
