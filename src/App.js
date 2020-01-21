import React from "react";
import "./index.scss";
import ColorBox from "./components/ColorBox";
import ColorContext, { ColorProvider } from "./contexts/color"; // 색상 저장 창고 가져옴.
import SelectColors from "./components/SelectColors";

function App() {
	return (
		<div className="App">
			<h2>Context API 사용하기</h2>

			<ColorProvider>
				<div>
					<SelectColors />
					<ColorBox />
				</div>
			</ColorProvider>
		</div>
	);
}

export default App;
