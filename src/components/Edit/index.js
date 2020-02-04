import React from "react";
import { Route } from "react-router-dom";
import { EditInput } from "components/Input";

const index = ({ match }) => {
	return (
		<div>
			<Route
				exact
				path={`${match.path}`}
				render={({ history }) => {
					alert("수정할 할일을 선택해주세요");
					history.push("/");
				}}
			></Route>
			<Route path={`${match.path}/:id`} component={EditInput}></Route>
		</div>
	);
};

export default index;
