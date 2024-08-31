import Accordion from "./components/Accordion/Accordion";
import { staticAccordionItems } from "./staticAccordionItems";
import "./App.css";
import TodoList from "./components/todo/TodoApp";
function App() {
	return (
		<>
			<Accordion items={staticAccordionItems} />
			<TodoList />
		</>
	);
}

export default App;
