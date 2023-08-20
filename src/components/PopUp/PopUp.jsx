/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./PopUp.css";
import {AiOutlineClose} from "react-icons/ai";
import {FaHeart} from "react-icons/fa";
import {BsHeart} from "react-icons/bs";
import {FavoriteDish} from "../../context/FavoriteContext";
import {useContext} from "react";

export default function PopUp({closePopUp, popUpData, checkFav}) {
	const {addToFavorite, removeFromFavorite, favState} =
		useContext(FavoriteDish);

	return (
		<div className='popup'>
			<AiOutlineClose className='popup-close' onClick={closePopUp} />
			<div className='popup-content'>
				<div className='popup-dish-img-section'>
					<img className='popup-dish-img' src={popUpData.strMealThumb} alt='' />
					{/* <div className='popup-icons'>
						<BsHeart
							className='popup-no-fav'
							onClick={() => {
								addToFavorite(
									popUpData.strMeal,
									popUpData.strMealThumb,
									popUpData.idMeal
								);
							}}
						/>
					</div> */}
					<h3 className='popup-dish-cat'>{popUpData.strCategory}</h3>
				</div>
				<div className='popup-dish-description-section'>
					<h2>{popUpData.strMeal}</h2>
					<br />
					<div className='ingrediants'>
						<h4>Ingrediants</h4>
						<h5>
							{popUpData.strIngredient1} {popUpData.strMeasure1}
						</h5>
						<h5>
							{popUpData.strIngredient2} {popUpData.strMeasure2}
						</h5>
						<h5>
							{popUpData.strIngredient3} {popUpData.strMeasure3}
						</h5>
						<h5>
							{popUpData.strIngredient4} {popUpData.strMeasure4}
						</h5>
						<h5>
							{popUpData.strIngredient5} {popUpData.strMeasure5}
						</h5>
						<h5>
							{popUpData.strIngredient6} {popUpData.strMeasure6}
						</h5>
						<h5>
							{popUpData.strIngredient7} {popUpData.strMeasure7}
						</h5>
						<h5>
							{popUpData.strIngredient8} {popUpData.strMeasure8}
						</h5>
						<h5>
							{popUpData.strIngredient9} {popUpData.strMeasure9}
						</h5>
						<h5>
							{popUpData.strIngredient10} {popUpData.strMeasure10}
						</h5>
						<h5>
							{popUpData.strIngredient11} {popUpData.strMeasure11}
						</h5>
						<h5>
							{popUpData.strIngredient12} {popUpData.strMeasure12}
						</h5>
						<h5>
							{popUpData.strIngredient13} {popUpData.strMeasure13}
						</h5>
						<h5>
							{popUpData.strIngredient14} {popUpData.strMeasure14}
						</h5>
						<h5>
							{popUpData.strIngredient15} {popUpData.strMeasure15}
						</h5>
						<h5>
							{popUpData.strIngredient16} {popUpData.strMeasure16}
						</h5>
						<h5>
							{popUpData.strIngredient17} {popUpData.strMeasure17}
						</h5>
						<h5>
							{popUpData.strIngredient18} {popUpData.strMeasure18}
						</h5>
						<br />
						<h3>Cooking Instruction</h3>
						<p>{popUpData.strInstructions}</p>
						<br />
					</div>
				</div>
			</div>
		</div>
	);
}
