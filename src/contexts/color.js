import React, { createContext, useState } from "react";

const ColorContext = createContext({ color: "black" });

export default ColorContext;

// const ColorContext = createContext({
// 	state: { color: "black", subcolor: "red" },
// 	actions: {
// 		setColor: () => {},
// 		setSubColor: () => {}
// 	}
// });

// const ColorProvider = ({ children }) => {
// 	const [color, setColor] = useState("black");
// 	const [color, setSubColor] = useState("red");

// 	const value = {};
// };
