import React from "react";
import "./index.scss";
import Layout from "components/Layout";
import Input from "components/Input";
import Edit from "components/Edit";
import CardList from "components/Card";
import { BrowserRouter, Route } from "react-router-dom";
import { AppContextProvider } from "context/AppContext";

function App() {
	return (
		<BrowserRouter>
			<AppContextProvider>
				<Layout>
					<Route
						exact
						path="/"
						render={props => (
							<>
								<Input {...props} />
								<CardList {...props} />
							</>
						)}
					/>
					<Route path="/edit" render={props => <Edit {...props} />} />
				</Layout>
			</AppContextProvider>
		</BrowserRouter>
	);
}

export default App;
