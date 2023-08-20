/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState} from "react";
import "./Pagination.css";

export default function Pagintaion(props) {
	let [activeNumber, setActiveNumber] = useState(1);
	let filterDish = props.dishFilter;
	let setCurrentPage = props.setCurrentPage;
	let itemNumber = [];

	for (let i = 1; i <= Math.ceil(filterDish.length / props.itemsPerPage); i++) {
		itemNumber.push(i);
	}
	function changePageItems(val) {
		setCurrentPage(val);
		props.setPageNumber(val);
	}

	let pagination = itemNumber.map((val) => {
		if (val === props.pageNumber) {
			return (
				<li
					key={val.index}
					className='pagination-section-li page-active'
					value={val}
					onClick={() => {
						changePageItems(val);
					}}>
					{val}
				</li>
			);
		} else {
			return (
				<li
					key={val.index}
					className='pagination-section-li'
					value={val}
					onClick={() => {
						changePageItems(val);
					}}>
					{val}
				</li>
			);
		}
	});

	return (
		<div className='pagination-section'>
			<ul className='pagination-section-ul'>{pagination}</ul>
		</div>
	);
}
