import React from "react";
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

const SelectColors = () => {
	return (
		<ColorConsumer>
			{context => (
				<div style={{ display: "flex" }}>
					{colors.map(color => (
						<div
							key={color}
							style={{ background: `${color}`, width: "24px", height: "24px", display: "inline-block", cursor: "pointer" }}
							onClick={() => {
								context.actions.setColor(color);
							}}
							onContextMenu={e => {
								e.preventDefault();
								context.actions.setSubColor(color);
							}}
						></div>
					))}
				</div>
			)}
		</ColorConsumer>
	);
};

export default SelectColors;
