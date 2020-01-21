import React from "react";
import "./index.scss";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color"; // 색상 저장 창고 가져옴.

function App() {
	return (
		<div className="App">
			<h2>Context API 사용하기</h2>

			<ColorContext.Provider value={{ color: "red" }}>
				<div>
					<ColorBox />
				</div>
			</ColorContext.Provider>

			<p>원래 색상 저장 창고에는 검정색이 들어있었다. 그런데, 판매자 Provider씨는 color를 red로 바꿔버렸다.</p>
			<p>판매자가 갑이기 때문에 색깔을 빨간색으로 바꾸면 구매자는 그 바뀐 빨간색을 살 수 밖에없다.</p>
			<p>여기서 소비자는 ColorBox이다. 판매자는 ColorContext.Provider이다.</p>
			<p>Provider가 변경한 정보(value={}부분)는 Provider의 자식들(ColorBox)에게 모두 영향을 미친다.</p>
		</div>
	);
}

export default App;
