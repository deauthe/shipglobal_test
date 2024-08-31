import { useState, useEffect } from "react";
import "./game.css";
const staticWords = [
	{
		jumbled: "plpae",
		answer: "apple",
		hint: "A popular fruit that's red, green, or yellow.",
	},
	{
		jumbled: "otp",
		answer: "pot",
		hint: "Used for cooking and often found in the kitchen.",
	},
	{
		jumbled: "tbael",
		answer: "table",
		hint: "Furniture with a flat top and one or more legs.",
	},
	{
		jumbled: "soshe",
		answer: "shoes",
		hint: "Footwear used to protect and comfort the feet.",
	},
	{
		jumbled: "eevrsre",
		answer: "reserve",
		hint: "To set aside for future use.",
	},
];

const Game = () => {
	const [currentWord, setCurrentWord] = useState({});
	const [input, setInput] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);

	const getRandomWord = () => {
		const randomIndex = Math.floor(Math.random() * staticWords.length);
		return staticWords[randomIndex];
	};

	const refreshWord = () => {
		setCurrentWord(getRandomWord());
		setInput("");
		setError("");
		setSuccess(false);
	};

	useEffect(() => {
		refreshWord();
	}, []);

	const onSubmit = () => {
		setError("");
		const cleanInput = input.toLowerCase().trim();
		if (cleanInput !== currentWord.answer) {
			setError("Please try again");
		} else {
			setSuccess(true);
		}
	};

	return (
		<div className="dialog">
			<div className="dialog-title">Word Scramble</div>
			<div className="dialog-jumble">{currentWord.jumbled?.toUpperCase()}</div>
			<div className="dialog-input-area">
				<input
					type="text"
					value={input}
					className="dialog-input"
					placeholder="Enter a valid word"
					onChange={(event) => setInput(event.target.value)}
				/>
				<span className="dialog-hint">{currentWord.hint}</span>
				<span className="dialog-error">{error}</span>
				{success && <span className="dialog-success">Correct!</span>}
			</div>
			<div className="dialog-actions">
				<button className="dialog-refresh-button" onClick={refreshWord}>
					Refresh Word
				</button>
				<button className="dialog-submit-button" onClick={onSubmit}>
					Check
				</button>
			</div>
		</div>
	);
};

export default Game;
