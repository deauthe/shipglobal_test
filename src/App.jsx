import Accordion from "./components/Accordion/Accordion";
import { staticAccordionItems } from "./staticAccordionItems";
import "./App.css";
import TodoList from "./components/todo/TodoApp";
import Game from "./components/game/Game";
function App() {
	return (
		<>
			<Accordion items={staticAccordionItems} />
			<TodoList />
			<Game />
		</>
	);
}

export default App;
