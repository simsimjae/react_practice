import React, { useState, useContext } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "context/AppContext";
import { Link } from "react-router-dom";

const Card = ({ inputText, cardId }) => {
	const [clicked, setClicked] = useState(false);
	const useAppContext = useContext(AppContext);

	const handleClick = e => {
		setClicked(!clicked);
	};

	const handleRemove = () => {
		const newList = useAppContext.list.filter(({ id }) => {
			return cardId !== id;
		});

		useAppContext.setList(newList);
	};

	return (
		<article className={`card ${clicked ? "on" : ""}`}>
			<div className="card_contents" onClick={handleClick}>
				{inputText}
			</div>
			<div className="card_buttons">
				<Link to={`/edit/${cardId}`}>
					<button type="button" className="card_button">
						<FontAwesomeIcon icon={faPen} size="lg" />
					</button>
				</Link>
				<button type="button" className="card_button" onClick={handleRemove}>
					<FontAwesomeIcon icon={faTrashAlt} size="lg" />
				</button>
			</div>
		</article>
	);
};

const CardList = () => {
	const useAppContext = useContext(AppContext);

	return useAppContext.list.map(({ id, inputText }) => {
		return (
			<section className="cardlist" key={id}>
				<Card inputText={inputText} cardId={id} />
			</section>
		);
	});
};

export default CardList;
