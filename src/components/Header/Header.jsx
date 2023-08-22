import "./Header.css";
import {BsMenuButtonWideFill} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";

export default function Header() {
	let [showLinks, setShowLinks] = useState(true);
	let [btnState, setBtnState] = useState(false);

	const res = () => {
		setShowLinks(false);
		setBtnState(true);
	};
	const resClose = () =>{
		setShowLinks(true)
		setBtnState(false)
	}
	return (
		<div className='navbar'>
			<div className='left-side'>
				<h1>Munchies</h1>
			</div>
			<div className='right-side'>
				<div className='responsive'>
					{btnState === false ? (
						<BsMenuButtonWideFill className='open' onClick={() => res()} />
					) : (
						<AiOutlineClose
							className='close'
							onClick={() => {
								resClose();
							}}
						/>
					)}
				</div>
				<div className='links' id={!showLinks ? "hidden" : ""}>
					<a>Special</a>
					<a>Filter</a>
					<a>Search</a>
				</div>
			</div>
		</div>
	);
}
