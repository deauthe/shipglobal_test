import React, { useState } from "react";
import "./todo.css";

const TodoList = () => {
	// Initial state for todos, each status is an array of todo items
	const [todos, setTodos] = useState({
		backlog: ["Item 1", "Item 2", "Item 3"],
		todo: ["Item 4"],
		ongoing: ["Item 5"],
		done: ["Item 6"],
	});

	// Function to move a todo item between statuses
	const moveTodo = (item, fromStatus, toStatus) => {
		setTodos((prevTodos) => {
			const newTodos = { ...prevTodos };
			newTodos[fromStatus] = newTodos[fromStatus].filter(
				(todo) => todo !== item
			);
			newTodos[toStatus].push(item);
			return newTodos;
		});
	};

	// Render function to create a card for each status
	const renderCard = (status, title, leftStatus, rightStatus) => (
		<div className="todo-card">
			<h3>{title}</h3>
			<ul>
				{todos[status].map((todo, index) => (
					<li key={index} className="todo-item">
						<span>{todo}</span>
						<div className="navigation-buttons">
							<button
								onClick={() => moveTodo(todo, status, leftStatus)}
								disabled={!leftStatus}
							>
								&#8592;
							</button>
							<button
								onClick={() => moveTodo(todo, status, rightStatus)}
								disabled={!rightStatus}
							>
								&#8594;
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);

	return (
		<div className="todo-list">
			{renderCard("backlog", "Backlog", null, "todo")}
			{renderCard("todo", "To Do", "backlog", "ongoing")}
			{renderCard("ongoing", "Ongoing", "todo", "done")}
			{renderCard("done", "Done", "ongoing", null)}
		</div>
	);
};

export default TodoList;
