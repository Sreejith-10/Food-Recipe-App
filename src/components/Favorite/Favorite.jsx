import {useState, useContext} from "react";
import "./Favorite.css";
import { FavoriteDish } from "../../context/FavoriteContext";

const Favorite = () => {
	const {favorite} = useContext(FavoriteDish);

	let favResult = favorite.map((val) => {
		return (
			<>
				<li className="fav-li">
					<img src={val.dishImg} className='fav-img' />
					<h5 className='fav-title'>{val.dishName}</h5>
				</li>
			</>
		);
	});

	return (
		<aside className='favorite-container'>
      <h4 className="fav-head">Favorite Dishes</h4>
			<div className='favorite-section'>
				<div className='favorite-dish-container'>
					<ul className='fav-ul'>{favResult}</ul>
				</div>
			</div>
		</aside>
	);
};

export default Favorite;
