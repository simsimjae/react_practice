import React from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
	return (
		<ColorConsumer>
			{context => (
				<>
					<div style={{ width: "64px", height: "64px", background: context.state.color }}></div>
					<div style={{ width: "32px", height: "32px", background: context.state.subColor }}></div>
				</>
			)}
		</ColorConsumer>
	);
};

export default ColorBox;
