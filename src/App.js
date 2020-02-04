import React from "react";
import "./index.scss";
import Layout from "components/Layout";
import Input from "components/Input";
import Edit from "components/Edit";
import CardList from "components/Card";
import { BrowserRouter, Route } from "react-router-dom";
import { AppContextProvider } from "context/AppContext";
import MetaTags from "react-meta-tags";

function App() {
	return (
		<BrowserRouter basename="/react_todolist">
			<AppContextProvider>
				<Layout>
					<MetaTags>
						<title>Todo List</title>
						<meta name="description" content="리액트로 만든 투두리스트" />
						<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
					</MetaTags>
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
