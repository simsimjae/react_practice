import React from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
	return <ColorContext.Consumer>{({ color }) => <div style={{ width: "64px", height: "64px", background: color }}></div>}</ColorContext.Consumer>;
};

export default ColorBox;
