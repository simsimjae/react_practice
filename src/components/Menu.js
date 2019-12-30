import React from "react";
import { NavLink, Link } from "react-router-dom";

const Menu = () => {
	const activeStyle = {
		color: "red",
		fontSize: "2rem"
	};
	return (
		<div>
			<NavLink exact to="/" activeStyle={activeStyle}>
				홈
			</NavLink>
			<NavLink exact to="/about" activeStyle={activeStyle}>
				소개
			</NavLink>
			<NavLink exact to="/about/react" activeStyle={activeStyle}>
				리액트 소개
			</NavLink>
			<Link to="/posts">포스트</Link>
			<Link to="/history">히스토리API</Link>
		</div>
	);
};

export default Menu;
