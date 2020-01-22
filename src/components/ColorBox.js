import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
	const context = useContext(ColorContext);

	console.log(context);
	return (
		<>
			<div style={{ width: "64px", height: "64px", background: context.state.color }}></div>
			<div style={{ width: "32px", height: "32px", background: context.state.subColor }}></div>
		</>
	);
};

export default ColorBox;
