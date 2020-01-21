import React, { createContext, useState } from "react";

const ColorContext = createContext({
	state: { color: "black", subColor: "red" },
	actions: {
		setColor: () => {},
		setSubColor: () => {}
	}
});
// 색깔 저장소에는 두가지 컬러가 들어있다.

const ColorProvider = ({ children }) => {
	const [color, setColor] = useState("black");
	const [subColor, setSubColor] = useState("red");

	const context = {
		state: { color, subColor },
		actions: { setColor, setSubColor }
	};

	return <ColorContext.Provider value={context}>{children}</ColorContext.Provider>;
};

const ColorConsumer = ColorContext.Consumer;

export { ColorProvider, ColorConsumer };

export default ColorContext;
