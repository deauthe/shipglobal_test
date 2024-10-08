/* eslint-disable react/prop-types */
import { useState } from "react";
import "./accordion.css";
import { IconCaretDown, IconSquareX } from "@tabler/icons-react";
const AccordionItem = ({ title, body }) => {
	const [open, setOpen] = useState();

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<div className="accordion-item">
			<div
				className={`accordion-title ${open ? "open" : ""}`}
				onClick={handleToggle}
			>
				<div>{title}</div>
				<div className={`accordion-toggle-icon ${open ? "open" : ""}`}>
					{open ? <IconSquareX /> : <IconCaretDown />}
				</div>
			</div>

			<div className={`accordion-body ${open ? "open" : ""}`}>{body}</div>
		</div>
	);
};

const Accordion = ({ items }) => {
	return (
		<div className="accordion">
			{items.map((item, index) => {
				return (
					<AccordionItem key={index} title={item.title} body={item.body} />
				);
			})}
		</div>
	);
};

export default Accordion;
