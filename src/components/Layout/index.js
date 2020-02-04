import React from "react";
import "./index.scss";
import Header from "components/Header";

const Layout = ({ children }) => {
	return (
		<main className="main">
			<div className="main_contents">
				<Header></Header>
				{children}
			</div>
		</main>
	);
};

export default Layout;
