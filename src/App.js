import React from "react";
import "./index.scss";
import AsyncSplitMe from "./ssr/AsyncSplitMe";
import { Route } from "react-router-dom";
import { Home, About, Posts, History } from "./pages";
import Menu from "./components/Menu";
import ColorBox from "./components/ColorBox";

function App() {
	return (
		<div className="App">
			<Menu></Menu>
			<AsyncSplitMe></AsyncSplitMe>
			<Route exact path="/" component={Home}></Route>
			<Route path="/about/:name?" component={About}></Route>
			<Route path="/posts" component={Posts}></Route>
			<Route path="/history" component={History}></Route>
			<h2>Context API 사용하기</h2>
			<ColorBox></ColorBox>
		</div>
	);
}

export default App;
