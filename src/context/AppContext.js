import React, { useState, createContext } from "react";

const AppContext = createContext([
	{
		id: 0,
		inputText: "hello"
	}
]);

const AppContextProvider = ({ children }) => {
	const [list, setList] = useState([]);

	const context = {
		list,
		setList
	};

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
