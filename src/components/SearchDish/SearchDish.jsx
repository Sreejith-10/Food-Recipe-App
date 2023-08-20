/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, {useState,useContext} from "react";
import "./SearchDish.css";
import CardDish from "/src/components/CardDish/CardDish";
import PopUp from "../PopUp/PopUp";
import Pagintaion from "../Pagination/Pagintaion";
import Empty from "./Empty";
import {BsSearch} from "react-icons/bs";
import { FavoriteDish } from "../../context/FavoriteContext";

export default function SearchDish() {
	let [key, setKey] = useState();
	let [searchKey, setSearchKey] = useState();
	let [searchResult, setSearchResult] = useState([]);
	let [dishState, setDishState] = useState(true);
	let [showPopUp, setShowPopUp] = useState(false);
	let [popUpData, setPopUpData] = useState();
	const {favorite, addToFavorite} = useContext(FavoriteDish);

	//Pagination

	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`;

	function searchKeyHandler(e) {
		setKey(e.target.value);
	}
	function saveSearchKeyHandler(e) {
		e.preventDefault();
		setSearchKey(key);
		searchDishItem();
	}
	function showPopUpHandler(data) {
		setShowPopUp(true);
		setPopUpData(data);
	}
	function closePopUp() {
		setShowPopUp(false);
	}

	const searchDishItem = () => {
		try {
			fetch(url)
				.then((data) => data.json())
				.then((data) => {
					if (data.meals === null) {
						setDishState(false);
					} else {
						setSearchResult(data.meals);
						setDishState(true);
					}
				});
		} catch (err) {
			console.log(err);
		}
	};
	let result = !dishState ? (
		<Empty />
	) : (
		searchResult.map((val) => {
			return <CardDish val={val} showPopUpHandler={showPopUpHandler} />;
		})
	);
	return (
		<section className='search-section-container'>
			<div className='search-section'>
				<h1 className='margin-b main-clr'>Search your food</h1>
				<h4 className='margin-b'>
					You can find your dish according to your ingrediant. Find your main
					ingrediants
				</h4>
				<form action='' onSubmit={saveSearchKeyHandler} className='search-form'>
					<BsSearch className='search-icon' />
					<input
						type='text'
						placeholder='Enter your dish ingrediants'
						className='search-bar'
						onChange={searchKeyHandler}
					/>
				</form>
			</div>
			<div className='search-result-section'>
				{showPopUp && <PopUp closePopUp={closePopUp} popUpData={popUpData} addToFavorite={addToFavorite}/>}
				<ul className='search-result-ul'>{result}</ul>
			</div>
		</section>
	);
}
