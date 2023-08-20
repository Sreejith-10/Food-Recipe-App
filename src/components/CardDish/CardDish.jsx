/* eslint-disable react/prop-types */
import "./CardDish.css";

export default function CardDish({val, showPopUpHandler}) {
	return (
		<li
			key={val.index}
			className='special-li'
			onClick={() => showPopUpHandler(val)}>
			<div className='card-container'>
				<img src={val.strMealThumb} alt='image not found' />
				<div className='scroll-left'>
					<h3 className='special-h3'>{val.strMeal}</h3>
				</div>
			</div>
		</li>
	);
}
