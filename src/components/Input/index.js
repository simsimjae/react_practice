import React, { useState, useContext, useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "context/AppContext";
import nextId from "react-id-generator";

export const EditInput = ({ match, history }) => {
	const [input, setInput] = useState("");
	const useAppContext = useContext(AppContext);

	useEffect(() => {
		useAppContext.list.map(item => {
			if (item.id === match.params.id) {
				setInput(item.inputText);
			}
		});
	}, []);

	const handleEdit = e => {
		e.preventDefault();
		const { list } = useAppContext;

		const itemIdx = list.findIndex(item => {
			return item.id === match.params.id;
		});

		const newList = [...list.slice(0, itemIdx), { inputText: input, id: nextId() }, ...list.slice(itemIdx + 1)];

		useAppContext.setList(newList);
		history.push("/");
	};

	return (
		<div className="todo">
			<form className="todo_form" onSubmit={handleEdit}>
				<div className="todo_area">
					<input className="todo_input" placeholder="오늘의 할일 수정하기" value={input} onChange={e => setInput(e.target.value)} />
				</div>
				<div className="todo_footer">
					<button className="todo_button">수정</button>
					<button type="button" className="todo_button" onClick={() => setInput("")}>
						삭제
					</button>
				</div>
			</form>
		</div>
	);
};

const Input = ({ edit, location, ...props }) => {
	const [input, setInput] = useState("");
	const useAppContext = useContext(AppContext);

	const handleSubmit = e => {
		e.preventDefault();
		if (!input.length) return;

		useAppContext.setList([{ inputText: input, id: nextId() }, ...useAppContext.list]);
		setInput("");
	};

	return (
		<div className="todo">
			<form className="todo_form" onSubmit={handleSubmit}>
				<div className="todo_area">
					<FontAwesomeIcon icon={faUserCircle} size="2x" />
					<input className="todo_input" placeholder="오늘의 할일은?" value={input} onChange={e => setInput(e.target.value)} />
				</div>
				<div className="todo_footer">
					<button className="todo_button">작성</button>
					<button type="button" className="todo_button" onClick={() => setInput("")}>
						삭제
					</button>
				</div>
			</form>
		</div>
	);
};

export default Input;
