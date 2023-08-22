/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./SpecialItems.css";
import CardDish from "../CardDish/CardDish";
import {useContext, useState} from "react";
import PopUp from "../PopUp/PopUp";
import {AllMenuContext} from "../../context/MenuContext";


export default function SpecialItems(props) {
	let [showPopUp, setShowPopUp] = useState(false);
	let [popUpData, setPopUpData] = useState([]);
	let limit = 10;
	const allMenu = useContext(AllMenuContext);
	function showPopUpHandler(data) {
		setShowPopUp(true);
		setPopUpData(data);
	}
	const closePopUp = () => {
		setShowPopUp(false);
	};
	let specialDish = allMenu.map((val, index) => {
		if (index < limit) {
			return <CardDish val={val} showPopUpHandler={showPopUpHandler} />;
		}
	});

	return (
		<section className='special-items'>
			{showPopUp && <PopUp closePopUp={closePopUp} popUpData={popUpData} />}
			<div className='special-section'>
				<h1 style={{color: "#ef591d"}} className='special-h1'>
					This is Special Dishes
				</h1>
				<h3 className='special-section-h3'>
					You can find Special dishes of all the cusine here feel free to try
					all of it.
				</h3>
				<div className='special-dishes'>
					<ul className='special-ul'>{specialDish}</ul>
				</div>
			</div>
		</section>
	);
}
