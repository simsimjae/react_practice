import React from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
	// 저장창고에 들어있는 색상을 꺼내온다.
	// Consumer(소비자)는 Provider(판매자)가 저장창고에서 꺼낸 색상을(기본은 검정색인데, 판매자가 방금 빨간색으로 바꿈) 구매해서 박스에 페인트칠을 한다.
	return <ColorContext.Consumer>{({ color }) => <div style={{ width: "64px", height: "64px", background: color }}></div>}</ColorContext.Consumer>;
};

export default ColorBox;
