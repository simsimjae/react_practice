import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { Link } from "react-router-dom";

const Header = props => {
	return (
		<>
			<nav className="nav">
				<a href="#" className="nav_item">
					<FontAwesomeIcon icon={faBars} size="lg" />
				</a>
				<Link to="/">
					<h1 href="#" className="nav_item nav_title">
						My Todo List
					</h1>
				</Link>
				<a href="#" className="nav_item">
					<FontAwesomeIcon icon={faSearch} size="lg" />
				</a>
			</nav>
		</>
	);
};

export default Header;
