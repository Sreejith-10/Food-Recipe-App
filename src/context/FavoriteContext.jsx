import React, {useState} from "react";

export const FavoriteDish = React.createContext();
export default function FavoriteContext(props) {
	let [favorite, setFavorite] = useState([]);
	let [favState, setFavState] = useState(false);

	const addToFavorite = (dishName, dishImg, idMeal) => {
		setFavorite([
			...favorite,
			{
				id:idMeal,
				dishImg: dishImg,
				dishName: dishName,
			},
		]);
		setFavState(true);
	};
	const removeFromFavorite = (id) => {
		let updatedFav = favorite.filter((val) => {
			return id != val.id
		});
		console.log(updatedFav)
		setFavorite(updatedFav);
		setFavState(false);
	};
	return (
		<FavoriteDish.Provider
			value={{
				favorite,
				addToFavorite,
				removeFromFavorite,
				favState,
				setFavState
			}}>
			{props.children}
		</FavoriteDish.Provider>
	);
}
